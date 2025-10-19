'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import toast from 'react-hot-toast'
import { 
  Save, 
  ArrowLeft, 
  Eye, 
  Upload, 
  X, 
  CheckCircle, 
  AlertTriangle, 
  Info,
  Lightbulb,
  Target,
  Search,
  BarChart3,
  FileText,
  Image as ImageIcon
} from 'lucide-react'

export default function ArticleEditor({ articleId = null }) {
  const router = useRouter()
  const isEdit = Boolean(articleId)

  const [loading, setLoading] = useState(false)
  const [saveLoading, setSaveLoading] = useState(false)
  const [imageUploading, setImageUploading] = useState(false)
  const [showPreview, setShowPreview] = useState(false)
  const [activeTab, setActiveTab] = useState('content')

  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    cover_image: '',
    category: 'holding',
    meta_title: '',
    meta_description: '',
    keywords: '',
    long_tail_keywords: '',
    published: false
  })

  const [seoAnalysis, setSeoAnalysis] = useState({
    titleLength: 0,
    metaLength: 0,
    contentLength: 0,
    wordCount: 0
  })

  const categories = [
    { value: 'holding', label: '🏢 Holding' },
    { value: 'fiscalite', label: '💰 Fiscalité' },
    { value: 'transmission', label: '🤝 Transmission' },
    { value: 'patrimoine', label: '💎 Patrimoine' },
    { value: 'juridique', label: '⚖️ Juridique' }
  ]

  const seoTips = [
    {
      icon: <Target className="w-4 h-4" />,
      title: "Titre percutant",
      tip: "Le titre doit donner envie de cliquer. Visez 50-60 caractères.",
      status: formData.title.length >= 50 && formData.title.length <= 60 ? 'success' : 'warning'
    },
    {
      icon: <BarChart3 className="w-4 h-4" />,
      title: "Longueur optimale",
      tip: "Pour un article SEO performant, visez 1000-2500 mots.",
      status: seoAnalysis.wordCount >= 1000 && seoAnalysis.wordCount <= 2500 ? 'success' : 'warning'
    },
    {
      icon: <Search className="w-4 h-4" />,
      title: "Méta-description",
      tip: "Rédigez une méta-description de 120-160 caractères.",
      status: seoAnalysis.metaLength >= 120 && seoAnalysis.metaLength <= 160 ? 'success' : 'warning'
    },
    {
      icon: <ImageIcon className="w-4 h-4" />,
      title: "Image de couverture",
      tip: "Une image attrayante augmente le taux de clic de 42%.",
      status: formData.cover_image ? 'success' : 'warning'
    }
  ]

  useEffect(() => {
    if (isEdit) {
      loadArticle()
    }
  }, [articleId])

  useEffect(() => {
    if (!isEdit || !formData.slug) {
      const slug = formData.title
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '')
      setFormData(prev => ({ ...prev, slug }))
    }
  }, [formData.title])

  useEffect(() => {
    const titleLength = formData.title.length
    const metaLength = formData.meta_description.length
    const contentLength = formData.content.length
    const wordCount = formData.content.trim().split(/\s+/).filter(word => word.length > 0).length
    
    setSeoAnalysis({ titleLength, metaLength, contentLength, wordCount })
  }, [formData.title, formData.meta_description, formData.content])

  async function loadArticle() {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .eq('id', articleId)
        .single()

      if (error) throw error

      if (data) {
        setFormData({
          title: data.title || '',
          slug: data.slug || '',
          excerpt: data.excerpt || '',
          content: data.content || '',
          cover_image: data.cover_image || '',
          category: data.category || 'holding',
          meta_title: data.meta_title || '',
          meta_description: data.meta_description || '',
          keywords: data.keywords || '',
          long_tail_keywords: data.long_tail_keywords || '',
          published: data.published || false
        })
      }
    } catch (error) {
      toast.error('Impossible de charger l\'article')
    } finally {
      setLoading(false)
    }
  }

  function handleInputChange(field, value) {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  async function handleImageUpload(event) {
    const file = event.target.files[0]
    if (!file) return

    if (file.size > 5 * 1024 * 1024) {
      toast.error('L\'image ne doit pas dépasser 5 MB')
      return
    }

    try {
      setImageUploading(true)
      const fileExt = file.name.split('.').pop()
      const fileName = `article_${Date.now()}.${fileExt}`
      
      const { error: uploadError } = await supabase.storage
        .from('article-images')
        .upload(fileName, file)

      if (uploadError) throw uploadError

      const { data: { publicUrl } } = supabase.storage
        .from('article-images')
        .getPublicUrl(fileName)

      handleInputChange('cover_image', publicUrl)
      toast.success('Image uploadée !')
    } catch (error) {
      toast.error('Erreur upload image')
    } finally {
      setImageUploading(false)
    }
  }

  async function handleSave(publish = false) {
    try {
      setSaveLoading(true)
      
      if (!formData.title.trim()) {
        toast.error('Le titre est obligatoire')
        return
      }

      const articleData = {
        title: formData.title,
        slug: formData.slug,
        excerpt: formData.excerpt,
        content: formData.content,
        cover_image: formData.cover_image,
        category: formData.category,
        meta_title: formData.meta_title,
        meta_description: formData.meta_description,
        keywords: formData.keywords,
        long_tail_keywords: formData.long_tail_keywords,
        published: publish,
        updated_at: new Date().toISOString()
      }

      if (isEdit) {
        const { error } = await supabase
          .from('articles')
          .update(articleData)
          .eq('id', articleId)

        if (error) throw error
        toast.success(`Article ${publish ? 'publié' : 'sauvegardé'} !`)
      } else {
        const { data: userData } = await supabase.auth.getUser()
        articleData.author_id = userData.user?.id
        articleData.created_at = new Date().toISOString()

        const { error } = await supabase
          .from('articles')
          .insert([articleData])

        if (error) throw error
        toast.success(`Article ${publish ? 'publié' : 'créé'} !`)
      }

      router.push('/admin/dashboard')
    } catch (error) {
      toast.error(error.message || 'Erreur de sauvegarde')
    } finally {
      setSaveLoading(false)
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'success': return <CheckCircle className="w-4 h-4 text-green-600" />
      case 'warning': return <AlertTriangle className="w-4 h-4 text-orange-600" />
      default: return <Info className="w-4 h-4 text-gray-600" />
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'success': return 'text-green-600'
      case 'warning': return 'text-orange-600'
      default: return 'text-gray-600'
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => router.back()}
              className="flex items-center text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Retour
            </button>
            <h1 className="text-3xl font-bold text-gray-900">
              {isEdit ? 'Modifier l\'Article' : 'Nouvel Article'}
            </h1>
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setShowPreview(!showPreview)}
              className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              <Eye className="w-4 h-4 mr-2" />
              Aperçu
            </button>
            <button
              onClick={() => handleSave(false)}
              disabled={saveLoading}
              className="flex items-center px-4 py-2 bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 rounded-lg transition-colors disabled:opacity-50 font-medium"
            >
              <Save className="w-4 h-4 mr-2" />
              Brouillon
            </button>
            <button
              onClick={() => handleSave(true)}
              disabled={saveLoading}
              className="flex items-center px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-colors disabled:opacity-50 font-medium"
            >
              <FileText className="w-4 h-4 mr-2" />
              Publier
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Contenu principal */}
          <div className="lg:col-span-2 space-y-6">
            {/* Tabs */}
            <div className="bg-white rounded-lg border border-gray-200">
              <div className="flex border-b border-gray-200">
                <button
                  onClick={() => setActiveTab('content')}
                  className={`flex-1 px-6 py-3 text-sm font-medium transition-colors ${
                    activeTab === 'content' 
                      ? 'text-amber-600 border-b-2 border-amber-600 bg-amber-50' 
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  Contenu
                </button>
                <button
                  onClick={() => setActiveTab('seo')}
                  className={`flex-1 px-6 py-3 text-sm font-medium transition-colors ${
                    activeTab === 'seo' 
                      ? 'text-amber-600 border-b-2 border-amber-600 bg-amber-50' 
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  SEO & Meta
                </button>
              </div>

              <div className="p-6">
                {/* Onglet Contenu */}
                {activeTab === 'content' && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Titre de l'article *
                      </label>
                      <input
                        type="text"
                        value={formData.title}
                        onChange={(e) => handleInputChange('title', e.target.value)}
                        placeholder="Un titre accrocheur qui donne envie de lire..."
                        className="w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent placeholder-gray-400"
                      />
                      <div className="text-xs text-gray-600 mt-1 font-medium">
                        {seoAnalysis.titleLength}/60 caractères
                        {seoAnalysis.titleLength > 60 && (
                          <span className="text-orange-600 ml-2">⚠️ Titre trop long</span>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        URL (slug)
                      </label>
                      <input
                        type="text"
                        value={formData.slug}
                        onChange={(e) => handleInputChange('slug', e.target.value)}
                        placeholder="url-de-l-article"
                        className="w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent placeholder-gray-400"
                      />
                      <div className="text-xs text-gray-600 mt-1 font-medium">
                        URL finale : /blog/{formData.slug || 'votre-slug'}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Catégorie *
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => handleInputChange('category', e.target.value)}
                        className="w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                      >
                        {categories.map(cat => (
                          <option key={cat.value} value={cat.value}>{cat.label}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Extrait/Résumé
                      </label>
                      <textarea
                        value={formData.excerpt}
                        onChange={(e) => handleInputChange('excerpt', e.target.value)}
                        placeholder="Un résumé engageant qui donne envie de lire l'article complet..."
                        rows={3}
                        className="w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent placeholder-gray-400"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Image de couverture
                      </label>
                      {formData.cover_image && (
                        <div className="relative w-full h-64 rounded-lg overflow-hidden mb-4">
                          <img
                            src={formData.cover_image}
                            alt="Cover"
                            className="w-full h-full object-cover"
                          />
                          <button
                            type="button"
                            onClick={() => handleInputChange('cover_image', '')}
                            className="absolute top-2 right-2 p-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      )}
                      <input
                        id="image-upload"
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                      <button
                        type="button"
                        onClick={() => document.getElementById('image-upload').click()}
                        disabled={imageUploading}
                        className="w-full flex items-center justify-center px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg hover:border-amber-600 hover:bg-amber-50 transition-colors disabled:opacity-50 text-gray-700 font-medium"
                      >
                        <Upload className="w-5 h-5 mr-2" />
                        {imageUploading ? 'Upload en cours...' : 'Choisir une image'}
                      </button>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Contenu de l'article *
                      </label>
                      <textarea
                        value={formData.content}
                        onChange={(e) => handleInputChange('content', e.target.value)}
                        placeholder="Rédigez votre article en HTML...

<h2>Titre de section</h2>
<p>Votre contenu ici...</p>

<h3>Sous-titre</h3>
<ul>
  <li>Point 1</li>
  <li>Point 2</li>
</ul>"
                        rows={25}
                        className="w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-lg font-mono text-sm focus:ring-2 focus:ring-amber-600 focus:border-transparent placeholder-gray-500"
                      />
                      <div className="flex justify-between text-xs text-gray-600 mt-2 font-medium">
                        <span>{seoAnalysis.wordCount} mots</span>
                        <span>{seoAnalysis.contentLength} caractères</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Onglet SEO */}
                {activeTab === 'seo' && (
                  <div className="space-y-6">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start">
                      <Info className="w-5 h-5 text-blue-700 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-blue-900">
                        Optimisez ces champs pour améliorer votre référencement sur Google et les réseaux sociaux.
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Titre SEO (balise title)
                      </label>
                      <input
                        type="text"
                        value={formData.meta_title}
                        onChange={(e) => handleInputChange('meta_title', e.target.value)}
                        placeholder="Titre optimisé pour Google"
                        className="w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent placeholder-gray-400"
                      />
                      <div className="text-xs text-gray-600 mt-1 font-medium">
                        {formData.meta_title.length}/60 caractères recommandés
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Méta-description
                      </label>
                      <textarea
                        value={formData.meta_description}
                        onChange={(e) => handleInputChange('meta_description', e.target.value)}
                        placeholder="Description qui apparaîtra dans les résultats Google"
                        rows={3}
                        className="w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent placeholder-gray-400"
                      />
                      <div className="text-xs text-gray-600 mt-1 font-medium">
                        {seoAnalysis.metaLength}/160 caractères recommandés
                        {seoAnalysis.metaLength > 160 && (
                          <span className="text-orange-600 ml-2">⚠️ Trop long</span>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Mots-clés SEO
                      </label>
                      <input
                        type="text"
                        value={formData.keywords}
                        onChange={(e) => handleInputChange('keywords', e.target.value)}
                        placeholder="holding, fiscalité, transmission"
                        className="w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent placeholder-gray-400"
                      />
                      <div className="text-xs text-gray-600 mt-1 font-medium">
                        Séparez les mots-clés par des virgules
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Mots-clés longue traîne 🎯
                      </label>
                      <textarea
                        value={formData.long_tail_keywords}
                        onChange={(e) => handleInputChange('long_tail_keywords', e.target.value)}
                        placeholder="comment créer une holding patrimoniale, holding pour transmission entreprise familiale, optimisation fiscale holding SARL"
                        rows={3}
                        className="w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent placeholder-gray-400"
                      />
                      <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mt-2">
                        <div className="flex items-start">
                          <Lightbulb className="w-4 h-4 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                          <div className="text-xs text-amber-900">
                            <strong className="font-medium">💡 Longue traîne :</strong> Expressions de 3+ mots ciblant des recherches spécifiques et moins concurrentielles. 
                            Exemple : "comment créer une holding pour optimiser l'impôt" plutôt que juste "holding".
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Analyse SEO */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="flex items-center text-lg font-medium text-gray-900 mb-4">
                <BarChart3 className="w-5 h-5 mr-2" />
                Analyse SEO
              </h3>
              <div className="space-y-3">
                {seoTips.map((tip, index) => (
                  <div key={index} className="border-l-4 border-gray-200 pl-3">
                    <div className="flex items-start space-x-2">
                      {getStatusIcon(tip.status)}
                      <div className="flex-1">
                        <h4 className={`text-sm font-medium ${getStatusColor(tip.status)}`}>
                          {tip.title}
                        </h4>
                        <p className="text-xs text-gray-700 mt-1">{tip.tip}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Checklist */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Checklist</h3>
              <div className="space-y-2 text-sm">
                {[
                  { check: formData.title.length > 0, text: "Titre défini" },
                  { check: formData.content.length > 500, text: "Contenu rédigé (500+ car)" },
                  { check: formData.meta_description.length > 0, text: "Méta-description" },
                  { check: formData.cover_image, text: "Image de couverture" },
                  { check: formData.category, text: "Catégorie sélectionnée" },
                  { check: seoAnalysis.wordCount >= 800, text: "Longueur optimale" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    {item.check ? (
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    ) : (
                      <div className="w-4 h-4 border-2 border-gray-300 rounded-full" />
                    )}
                    <span className={item.check ? 'text-green-700 font-medium' : 'text-gray-700'}>
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Aperçu */}
        {showPreview && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900">Aperçu</h2>
                <button onClick={() => setShowPreview(false)} className="p-2 hover:bg-gray-100 rounded-lg">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-8">
                {formData.cover_image && (
                  <img src={formData.cover_image} alt={formData.title} className="w-full h-80 object-cover rounded-lg mb-6" />
                )}
                <div className="mb-4">
                  <span className="px-3 py-1 bg-amber-100 text-amber-700 text-sm rounded-full font-medium">
                    {categories.find(c => c.value === formData.category)?.label}
                  </span>
                </div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">{formData.title || 'Titre de l\'article'}</h1>
                {formData.excerpt && <p className="text-xl text-gray-600 mb-8">{formData.excerpt}</p>}
                {formData.content && <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: formData.content }} />}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
