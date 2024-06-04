import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import axios from 'axios';


const IndexPage = () => {
  const navigate = useNavigate();

  const handleRemoveCookie = async () => {
    try {
      const response = await axios.get('/remove-cookie');
      console.log(response.data);
    } catch (error) {
      console.error('Error removing cookie:', error);
    }
  };

  useEffect(() => {
   // handleRemoveCookie();
    navigate('/login');
  }, [navigate]);
  return (
    <div>
      This is index page


    </div>
  )
}

export default IndexPage