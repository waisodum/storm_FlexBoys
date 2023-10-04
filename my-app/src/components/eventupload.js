import React, { useState } from 'react';

const EventUpload = () => {
  const [theme, setTheme] = useState('Basic');
  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [budgetItems, setBudgetItems] = useState([]);
  const [itemDescription, setItemDescription] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [eventImage, setEventImage] = useState(null);

  const themes = ['Basic', 'Premium', 'Lavish'];

  const handleThemeChange = (selectedTheme) => {
    setTheme(selectedTheme);
  };


  const handleAddItem = () => {
    if (itemDescription && itemPrice) {
      const newItem = {
        description: itemDescription,
        price: parseFloat(itemPrice),
      };
      setBudgetItems([...budgetItems, newItem]);
      setItemDescription('');
      setItemPrice('');
    }
  };

  const calculateTotalBudget = () => {
    return budgetItems.reduce((total, item) => total + item.price, 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an object with the event data
    const eventData = {
      eventName,
      eventDescription,
      theme,
      budgetItems,
      eventImage,
    };

    // Reset the form fields by setting the state values to their initial state
    setEventName('');
    setEventDescription('');
    setBudgetItems([]);
    setItemDescription('');
    setItemPrice('');
    setEventImage(null);

    alert('Event data submitted successfully.');
  };

  return (
    <div className='bg-neutral-400'>
    <div className="w-5/6 justify-center mx-auto rounded-lg px-10 bg-neutral-600">
      <h2 className="text-3xl text-white font-semibold mb-4">Event Upload</h2>

      <div className="mb-4">
        <label htmlFor="theme" className="block text-white text-lg">
          Event Theme
        </label>
        <select
          id="theme"
          className="border rounded w-full py-2 px-3 text-lg"
          value={theme}
          onChange={(e) => handleThemeChange(e.target.value)}
        >
          {themes.map((themeOption) => (
            <option key={themeOption} value={themeOption}>
              {themeOption}
            </option>
          ))}
        </select>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="mb-4">
          <label htmlFor="eventName" className="block text-white text-lg">
            Event Name
          </label>
          <input
            type="text"
            id="eventName"
            className="border rounded w-full py-2 px-3 text-lg"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="eventDescription" className="block text-white text-lg">
            Event Description
          </label>
          <textarea
            id="eventDescription"
            className="border rounded w-full py-2 px-3 text-lg"
            value={eventDescription}
            onChange={(e) => setEventDescription(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="eventImage" className="block text-white text-lg">
            Event Image
          </label>
          <input
            type="file"
            id="eventImage"
            className="border rounded w-full py-2 px-3 text-lg"
            accept="image/*"
            onChange={(e) => setEventImage(e.target.files[0])}
          />
        </div>

        <div className="mb-4">
          <h3 className="text-2xl text-white font-semibold mb-2">Budget Plan ({theme} Theme)</h3>
          
          <div className="flex space-x-2">
            <input
              type="text"
              className="border rounded-l w-3/4 py-2 px-3 text-lg"
              placeholder="Item Description"
              value={itemDescription}
              onChange={(e) => setItemDescription(e.target.value)}
            />
            <input
              type="number"
              className="border rounded-r w-1/4 py-2 px-3 text-lg"
              placeholder="Price"
              value={itemPrice}
              onChange={(e) => setItemPrice(e.target.value)}
            />
          </div>
          <button
            type="button"
            onClick={handleAddItem}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 text-lg"
          >
            Add Item
          </button>
          <ul className="list-disc list-inside mt-2">
            {budgetItems.map((item, index) => (
              <li key={index} className="text-lg">
                {item.description}: Rs{item.price.toFixed(2)}
              </li>
            ))}
          </ul>
          <div className="mt-2 text-xl text-white">
            Total Budget: Rs{calculateTotalBudget().toFixed(2)}
          </div>
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 text-lg"
        >
          Submit
        </button>
      </form>
    </div>
    </div>
  );
};

export default EventUpload;









