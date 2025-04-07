import { createClient } from '@supabase/supabase-js';

// Real Supabase project credentials
const supabaseUrl = 'https://wxzobzamheiqkeoqkacn.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind4em9iemFtaGVpcWtlb3FrYWNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM5Nzg3MzcsImV4cCI6MjA1OTU1NDczN30.QwA6JyXazZjwNU2jbtq0_HyDfMmNw-I_usAUeOlQJXA';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
