import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase credentials. Please check your .env file.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Feedback related functions
export const getFeedback = async () => {
  const { data, error } = await supabase
    .from('feedback')
    .select('*')
    .order('created_at', { ascending: false });
  
  if (error) {
    console.error('Error fetching feedback:', error);
    return [];
  }
  
  return data || [];
};

export const addFeedback = async (name, message) => {
  const { data, error } = await supabase
    .from('feedback')
    .insert([{ name, message }])
    .select();
  
  if (error) {
    console.error('Error adding feedback:', error);
    return null;
  }
  
  return data?.[0] || null;
};

// Subscribe to real-time changes
export const subscribeToFeedback = (callback) => {
  const subscription = supabase
    .channel('public:feedback')
    .on('postgres_changes', 
      { 
        event: '*', 
        schema: 'public', 
        table: 'feedback' 
      }, 
      (payload) => {
        callback(payload);
      }
    )
    .subscribe();
  
  return subscription;
}; 