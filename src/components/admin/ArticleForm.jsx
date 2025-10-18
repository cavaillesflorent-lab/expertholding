'use client'

import { useState, useEffect } from 'react'
import { Upload, X, Eye } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function ArticleForm({ initialData = null, onSubmit, loading, isEdit = false }) {
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    image_url: '',
    category: 'Holding',
    tags: [],
    author: 'Florent Cavailles',
    published: false,
  })

  const [tagInput, setTagInput] = useState('')
  const [preview, setPreview] = useState(false)
  const [imageUploading, setImageUploading] = useState(false)

  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title || '',
        slug: initialData.slug || '',
        excerpt: initialData.excerpt || '',
        content: initialData.content || '',
        image_url: initialData.image_url || '',
        category: initialData.category || 'Holding',
        tags: initialData.tags || [],
        author: initialData.author || 'Florent Cavailles',
        published: initialData.published || false,
      })
    }
  }, [initialData])

  // Auto-générer le slug depuis le titre
  useEffect(() => {
    if (!isEdit && formData.title) {
      const slug = formData.title
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '')
      setFormData(prev => ({ ...prev, slug }))
    }
  }, [formData.title, isEdit])

  function handleChange(e) {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  function handleAddTag() {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, tagInput.trim()]
      }))
      setTagInput('')
    }
  }

  function handleRemoveTag(tagToRemove) {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }))
  }

  async function handleImageUpload(e) {
    const file = e.target.files?.[0]
    if (!file) return

    // Vérifier le type de fichier
    if (!file.type.startsWith('image/')) {
      alert('Veuillez sélectionner une image')
      return
    }

    // Vérifier la taille (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert('L\'image doit faire moins de 5MB')
      return
    }

    setImageUploading(true)

    try {
      // Option 1 : Upload vers Supabase Storage (recommandé)
      // const { data, error } = await supabase.storage
      //   .from('blog-images')
      //   .upload(`${Date.now()}-${file.name}`, file)
      // 
      // if (error) throw error
      // 
      // const { data: { publicUrl } } = supabase.storage
      //   .from('blog-images')
      //   .getPublicUrl(data.path)
      // 
      // setFormData(prev => ({ ...prev, image_url: publicUrl }))

      // Option 2 : Conversion en base64 (temporaire, pas recommandé en prod)
      const reader = new FileReader()
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, image_url: reader.result }))
      }
      reader.readAsDataURL(file)

      // Option 3 : Utiliser un service externe (Cloudinary, Uploadcare, etc.)
      // Voir documentation du service choisi

    } catch (error) {
      console.error('Erreur upload:', error)
      alert('Erreur lors de l\'upload de l\'image')
    } finally {
      setImageUploading(false)
    }
  }

  function handleSubmit(e) {
    e.preventDefault()

    // Validation
    if (!formData.title.trim()) {
      alert('Le titre est requis')
      return
    }

    if (!formData.slug.trim()) {
      alert('Le slug est requis')
      return
    }

    if (!formData.content.trim()) {
      alert('Le contenu est requis')
      return
    }

    onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="bg-white rounded-lg shadow p-6">
        {/* Titre */}
        <div className="mb-6">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
            Titre *
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
            placeholder="Le titre de votre article"
          />
        </div>

        {/* Slug */}
        <div className="mb-6">
          <label htmlFor="slug" className="block text-sm font-medium text-gray-700 mb-2">
            Slug (URL) *
          </label>
          <input
            type="text"
            id="slug"
            name="slug"
            value={formData.slug}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
            placeholder="titre-de-votre-article"
          />
          <p className="mt-1 text-sm text-gray-500">
            URL: /blog/{formData.slug || 'slug-de-article'}
          </p>
        </div>

        {/* Excerpt */}
        <div className="mb-6">
          <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-2">
            Résumé (Excerpt)
          </label>
          <textarea
            id="excerpt"
            name="excerpt"
            value={formData.excerpt}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
            placeholder="Un court résumé de l'article (150-200 caractères)"
          />
          <p className="mt-1 text-sm text-gray-500">
            {formData.excerpt.length} caractères
          </p>
        </div>

        {/* Catégorie */}
        <div className="mb-6">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
            Catégorie
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
          >
            <option value="Holding">Holding</option>
            <option value="Transmission">Transmission</option>
            <option value="Fiscalité">Fiscalité</option>
            <option value="Patrimoine">Patrimoine</option>
            <option value="Actualités">Actualités</option>
            <option value="Guides">Guides</option>
          </select>
        </div>

        {/* Tags */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tags
          </label>
          <div className="flex gap-2 mb-2">
            <input
              type="text"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
              placeholder="Ajouter un tag"
            />
            <button
              type="button"
              onClick={handleAddTag}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
            >
              Ajouter
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {formData.tags.map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm"
              >
                {tag}
                <button
                  type="button"
                  onClick={() => handleRemoveTag(tag)}
                  className="hover:text-orange-900"
                >
                  <X size={14} />
                </button>
              </span>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Image de couverture
          </label>
          
          {formData.image_url ? (
            <div className="relative">
              <img
                src={formData.image_url}
                alt="Preview"
                className="w-full h-64 object-cover rounded-lg mb-2"
              />
              <button
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, image_url: '' }))}
                className="absolute top-2 right-2 p-2 bg-red-600 text-white rounded-full hover:bg-red-700"
              >
                <X size={16} />
              </button>
            </div>
          ) : (
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <Upload className="mx-auto text-gray-400 mb-2" size={32} />
              <p className="text-sm text-gray-600 mb-4">
                Cliquez pour uploader une image ou glissez-déposez
              </p>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                disabled={imageUploading}
                className="hidden"
                id="image-upload"
              />
              <label
                htmlFor="image-upload"
                className="inline-block px-4 py-2 bg-orange-600 text-white rounded-lg cursor-pointer hover:bg-orange-700"
              >
                {imageUploading ? 'Upload en cours...' : 'Choisir une image'}
              </label>
            </div>
          )}

          {/* URL directe (fallback) */}
          <div className="mt-4">
            <label className="block text-sm text-gray-600 mb-1">
              Ou entrez une URL d'image :
            </label>
            <input
              type="url"
              name="image_url"
              value={formData.image_url}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
              placeholder="https://example.com/image.jpg"
            />
          </div>
        </div>

        {/* Auteur */}
        <div className="mb-6">
          <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-2">
            Auteur
          </label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
          />
        </div>
      </div>

      {/* Contenu (Markdown) */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-4">
          <label htmlFor="content" className="block text-sm font-medium text-gray-700">
            Contenu (Markdown) *
          </label>
          <button
            type="button"
            onClick={() => setPreview(!preview)}
            className="flex items-center gap-2 px-4 py-2 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
          >
            <Eye size={16} />
            {preview ? 'Éditer' : 'Prévisualiser'}
          </button>
        </div>

        {preview ? (
          <div className="prose prose-lg max-w-none border border-gray-200 rounded-lg p-6 min-h-96">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {formData.content}
            </ReactMarkdown>
          </div>
        ) : (
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
            rows={20}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent font-mono text-sm"
            placeholder="Écrivez votre article en Markdown..."
          />
        )}

        {/* Aide Markdown */}
        <details className="mt-4">
          <summary className="text-sm text-gray-600 cursor-pointer hover:text-gray-900">
            Aide Markdown
          </summary>
          <div className="mt-2 p-4 bg-gray-50 rounded-lg text-sm text-gray-700 space-y-2">
            <p><code># Titre H1</code> • <code>## Titre H2</code> • <code>### Titre H3</code></p>
            <p><code>**gras**</code> • <code>*italique*</code> • <code>`code`</code></p>
            <p><code>[lien](https://example.com)</code></p>
            <p><code>![image](https://example.com/image.jpg)</code></p>
            <p><code>- Liste</code> • <code>1. Liste numérotée</code></p>
            <p><code>&gt; Citation</code></p>
          </div>
        </details>
      </div>

      {/* Actions */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                name="published"
                checked={formData.published}
                onChange={handleChange}
                className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-600"
              />
              <span className="text-sm font-medium text-gray-700">
                Publier immédiatement
              </span>
            </label>
          </div>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => window.history.back()}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
            >
              Annuler
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Enregistrement...' : isEdit ? 'Mettre à jour' : 'Créer l\'article'}
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}