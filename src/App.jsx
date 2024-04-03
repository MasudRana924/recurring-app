import './App.css'
import axios from 'axios';
function App() {
  const subscriptionCreate = async () => {
    try {

      // const { data } = await axios.post('http://localhost:5000/api/create/subscription', { amount: 10, frequency: 'DAILY', orderId: 1 }, { withCredentials: true });
      const { data } = await axios.post('https://recurring-service.onrender.com/api/create/subscription', { amount: 10, frequency: 'DAILY', orderId: 1 }, { withCredentials: true });
      console.log(data);
      window.location.href = data.redirectURL
    } catch (error) {
      console.log(error.response.data)
    }
  }

  return (
    <div className="bg-white dark:bg-gray-900">
      <div className=" container mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">Donate </h1>
        <p className="max-w-2xl mx-auto mt-4 text-center text-gray-500 xl:mt-6 dark:text-gray-300">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias quas magni libero consequuntur voluptatum velit amet id repudiandae ea, deleniti laborum in neque eveniet.
        </p>
        <div className="grid grid-cols-1 gap-8 mt-6 xl:mt-12 xl:gap-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="w-full p-8 space-y-8 text-center border border-gray-200 rounded-lg dark:border-gray-700">
            <p className="font-medium text-gray-500 uppercase dark:text-gray-300">Monthly Donation</p>
            <h2 className="text-4xl font-semibold text-gray-800 uppercase dark:text-gray-100">
              10 TK
            </h2>
            <button onClick={subscriptionCreate} className="w-full px-4 py-2 mt-10 tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
              Start Now
            </button>
          </div>
          <div className="w-full p-8 space-y-8 text-center bg-blue-600 rounded-lg">
            <p className="font-medium text-gray-200 uppercase">Yearly Donation</p>
            <h2 className="text-5xl font-bold text-white uppercase dark:text-gray-100">
              120 TK
            </h2>
            <button className="w-full px-4 py-2 mt-10 tracking-wide text-blue-500 capitalize transition-colors duration-300 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:ring focus:ring-gray-200 focus:ring-opacity-80">
              Start Now
            </button>
          </div>
          <div className="w-full p-8 space-y-8 text-center border border-gray-200 rounded-lg dark:border-gray-700">
            <p className="font-medium text-gray-500 uppercase dark:text-gray-300">Six Month Donation</p>
            <h2 className="text-4xl font-semibold text-gray-800 uppercase dark:text-gray-100">
             60 TK
            </h2>
            <button className="w-full px-4 py-2 mt-10 tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
              Start Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
