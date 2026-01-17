import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import { Routes } from 'react-router-dom'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import CreateBlog from './pages/CreateBlog';
import Navbar from './components/Navbar';


const queryClient=new QueryClient({
  defaultOptions:{
    queries:{
      staleTime:5*60*1000,
      refetchOnWindowFocus:false,
    },
  },
})

function App() {
 
   return (
    <QueryClientProvider client={queryClient}>
      <Navbar/>
      
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="create-blog" element={<CreateBlog/>}/>
      </Routes>
      
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
 
   
}

export default App
