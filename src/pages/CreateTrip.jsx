import { Input } from '@/components/ui/input';
import { selectBudgetOption, selectTravelList } from '@/constant/option';
import { useEffect, useState } from 'react';
import { IoIosSend } from "react-icons/io";
import FormImg1 from '@/assets/image2.jpg';
import FormImg2 from '@/assets/image19.jpg';
import FormImg3 from '@/assets/image20.jpg';
import FormImg4 from '@/assets/image21.jpg';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { Textarea } from '@/components/ui/textarea';
import { Toaster, toast } from 'sonner';

const CreateTrip = () => {
  const [location, setLocation] = useState('');
  const [formData, setFormData] = useState([]);

  const handleInputChange = (name, value) => {
    setFormData({...formData, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!(formData.location && formData.days && formData.budget && formData.people) ) {
        return toast('Please, Enter Proper Details');
    }
    toast('Form Submit Successfully.... 🎉🎉🎊');
    console.log(formData);
  }
  return (
    <div className='px-[50px] mt-10'>
      <h2 className='text-[2vw] font-semibold'>Tell us your Travel Preferences</h2>
      <p className='text-lg text-gray-600'>
        Just provide us some basic information & we will generate a customized itinerary 
        based on your preferences. 
      </p>

      <div className="grid grid-cols-5 gap-5">
        <form className='trip_form my-10 col-span-3' onSubmit={handleSubmit}>
            <div className="form_group mb-5">
            <label className="form_label text-xl font-medium" htmlFor="destination">
                Where are you planning to Visit:
            </label>
            <GooglePlacesAutocomplete 
                apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
                selectProps={{
                    placeholder: "Enter destination",
                    value: location,
                    onChange: (address) => {setLocation(address), handleInputChange('location', address)},
                }} 
            />
            </div>

            <div className="form_group mb-5">
                <label className="form_label text-xl font-medium" htmlFor="people">How many days are traveling:</label>
                <Input placeholder={'Enter days'} onChange={(e) => handleInputChange('days', e.target.value)} />
            </div>

            <div className="form_group mb-5">
                <label className='form_label text-xl font-medium' htmlFor='budget'>What is your budget for the trip:</label>
                <div className="grid grid-cols-3 gap-5">
                {
                    selectBudgetOption.map((item, index) => (
                        <div className={`p-4 border-2 rounded-lg hover:shadow-md cursor-pointer 
                            ${formData.budget === item.title && "border-[#0D0560]"}`} key={index} 
                        onClick={() => handleInputChange('budget', item.title)}>
                            <h2 className='text-[30px]'>{item.icon}</h2>
                            <h3 className='text-lg font-semibold'>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))
                }
                </div>
            </div>

            <div className="form_group mb-5">
                <label className='form_label text-xl font-medium' htmlFor='budget'>How many people are traveling: </label>
                <div className="grid grid-cols-4 gap-5">
                    {
                        selectTravelList.map((people, index) => (
                            <div className={`p-4 border-2 rounded-lg hover:shadow-md cursor-pointer 
                            ${ formData.people === people.title && "border-[#0D0560]"}`} key={index}
                            onClick={() => handleInputChange('people', people.title)}>
                                <h2 className='text-[30px]'>{people.icon}</h2>
                                <h3 className='text-lg font-semibold'>{people.title}</h3>
                                <p>{people.desc}</p>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="form_group mb-5">
                <label htmlFor="instructions">Additional Note of Instructions:</label>
                <Textarea onChange={(e) => handleInputChange('notes', e.target.value)} col={5}  row={10}/>
                
            </div>

            <button type='submit' className='bg-[#0D0560] text-white px-5 py-3 rounded-lg w-full flex justify-center items-center gap-2 mt-5 mb-20'> <IoIosSend /> Plan My Trip</button>
        </form>

        <div className="col-span-2">
            <div className="p-5 grid grid-cols-2 gap-3">
                <img className='object-contain object-center' src={FormImg2} alt="trip form" />
                <img className='object-contain object-center relative top-5' src={FormImg3} alt="trip form" />
                <img className='object-contain object-center' src={FormImg4} alt="trip form" />
                <img className='object-contain object-center relative top-8' src={FormImg1} alt="trip form" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTrip;
