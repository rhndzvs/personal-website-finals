import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.39.3/+esm'

// Initialize Supabase client
const supabaseUrl = 'https://sbwdfdbndchhgilajsjl.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNid2RmZGJuZGNoaGdpbGFqc2psIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc5NjgzMDEsImV4cCI6MjA1MzU0NDMwMX0.qtdB8FyrZRjHcTlLxnoYjdkPN259FVJHabX3Wg2UXU8'
const supabase = createClient(supabaseUrl, supabaseKey)

// DOM Elements
const feedbackForm = document.querySelector('#feedback-form')
const commentsContainer = document.querySelector('#comments-container')

// Format date
const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    })
}

// Create comment HTML
const createCommentElement = (comment) => {
    const commentElement = document.createElement('div')
    commentElement.className = 'comment'
    commentElement.innerHTML = `
        <div class="comment-header">
            <h4>${comment.full_name}</h4>
            <span>${formatDate(comment.created_at)}</span>
        </div>
        <p>${comment.message}</p>
    `
    return commentElement
}

// Load existing comments
const loadComments = async () => {
    const { data, error } = await supabase
        .from('comments')
        .select('*')
        .order('created_at', { ascending: false })

    if (error) {
        console.error('Error loading comments:', error)
        return
    }

    commentsContainer.innerHTML = ''
    data.forEach(comment => {
        commentsContainer.appendChild(createCommentElement(comment))
    })
}

// Handle form submission
feedbackForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    const fullName = feedbackForm.querySelector('input[type="text"]').value
    const message = feedbackForm.querySelector('textarea').value

    if (!fullName || !message) {
        alert('Please fill in all fields')
        return
    }

    const { error } = await supabase
        .from('comments')
        .insert([{ full_name: fullName, message }])

    if (error) {
        console.error('Error submitting comment:', error)
        alert('Error submitting comment. Please try again.')
        return
    }

    // Reload comments immediately after successful submission
    await loadComments()
    feedbackForm.reset()
})

// Subscribe to real-time updates
const channel = supabase.channel('public:comments')
channel
    .on('postgres_changes',
        {
            event: 'INSERT',
            schema: 'public',
            table: 'comments'
        },
        async (payload) => {
            await loadComments()
        }
    )
    .subscribe()

// Initial load
loadComments()