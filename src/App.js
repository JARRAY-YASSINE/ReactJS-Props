import Profile from './profile/profileComponent';
import tof from './assets/yass.jpeg';
import './App.css';

function App() {
  
  const handleName = (firstname,lastname) => {
    alert(`Hello ${firstname} ${lastname}`)
  }

  return (
    <div className='page'>
            <Profile id='mouse'
                firstname='Yass' 
                lastname='Yassine' 
                bio='Graduated 2017' 
                profession='Embedded Software engineer' 
                handleName={handleName}     
            >
      <img className='image' src={tof} alt='yass' width='500px'/>
      </Profile>
    </div>
  );
}

export default App;

