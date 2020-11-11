import React from 'react'
import { FaMobile } from 'react-icons/fa';
import { FaTaxi } from 'react-icons/fa';
import { RiMotorbikeFill } from 'react-icons/ri';
import { RiArtboardFill } from 'react-icons/ri';
import { CgScreen } from 'react-icons/cg';
import { FaIndustry } from 'react-icons/fa';
import { MdRoomService } from 'react-icons/md';
import { FaShoppingBag } from 'react-icons/fa';
import { RiBearSmileFill } from 'react-icons/ri';
import { GiSofa } from 'react-icons/gi';
import { FaTshirt } from 'react-icons/fa';
import { FaGuitar } from 'react-icons/fa';
import { FaBaby } from 'react-icons/fa';

const initialState = {
    values : [{
    name: "Mobiles",
    icon: <FaMobile fontSize = "large" />,
    categories: [
      { category: "Tablets" },
      { category: "Accessories" },
      { category: "Mobile Phones" }
    ]

  },
  {
    name: "Vehicles",
    icon: <FaTaxi fontSize = "large" />,
    categories: [
      { category: "Cars" },
      { category: "Cars on Installments" },
      { category: "Cars Accessories" },
      { category: "Spare Parts" },
      { category: "Buses, Vans & Trucks" },
      { category: "Rickshaw & Chingchi" },
      { category: "Other Vehicles" },
      { category: "Boats" },
      { category: "Tractors & Trailers" }
    ]
    },
  {
    name: "Property for Sale",
    icon: <RiArtboardFill fontSize = "large" />,
    categories: [
      { category: "Land & Plots" },
      { category: "Houses" },
      { category: "Aparments & Flats" },
      { category: "Shops - Offices - Commercial Space" },
      { category: "Portions & Floors" }
    ]

  },
  {
    name: "Property for Rent",
    icon: <RiArtboardFill fontSize = "large" />,
    categories: [
      { category: "Houses" },
      { category: "Aparments & Flats" },
      { category: "Portions & Floors" },
      { category: "Shops - Offices - Commercial Space" },
      { category: "Rooms" },
      { category: "Roommates & Paying Guests" },
      { category: "Vacation Rentals - Guest Houses" },
      { category: "Land & Plots" }
    ]
    },
  {
    name: "Electronics & Home Appliances",
    icon: <CgScreen fontSize = "large" />,
    categories: [
      { category: "Computers & Accessories" },
      { category: "TV - Video - Audio" },
      { category: "Cameras & Accessories" },
      { category: "Games & Entertainment" },
      { category: "Other Home Appliances" },
      { category: "Generators, UPS & Power Solutions" },
      { category: "Kitchen Appliances" },
      { category: "AC & Coolers" },
      { category: "Fridges & Freezers" },
      { category: "Washing Machines & Dryers" }
    ]

  },
  {
    name: "Bikes",
    icon: <RiMotorbikeFill fontSize = "large" />,
    categories: [
      { category: "Motorcycles" },
      { category: "Spare Parts" },
      { category: "Bicycles" },
      { category: "ATV & Quads" },
      { category: "Scooters" }
    ]
    },
  {
    name: "Bussiness, Industrial & Agriculture",
    icon: <FaIndustry fontSize = "large" />,
    categories: [
      { category: "Bussiness For Sale" },
      { category: "Food & Restaurants" },
      { category: "Trade & Industrial" },
      { category: "Construction & Heavy Machinery" },
      { category: "Agriculture" },
      { category: "Other Business & Industry" },
      { category: "Medical & Pharma" }
    ]

  },
  {
    name: "Services",
    icon: <MdRoomService fontSize = "large" />,
    categories: [
      { category: "Car Rental" },
      { category: "Drivers & Taxi" },
      { category: "Web Development" },
      { category: "Other Services" },
      { category: "Electronics & Computer Repair" },
      { category: "Event Services" },
      { category: "Health & Beauty" },
      { category: "Maids & Domestic Help" },
      { category: "Movers & Packers" },
      { category: "Home & Office Repair" },
      { category: "Catering & Restaurant" },
      { category: "Farm & Fresh Food" }
    ]
  },
  {
    name: "Jobs",
    icon: <FaShoppingBag fontSize = "large" />,
    categories: [
      { category: "Online" },
      { category: "Marketing" },
      { category: "Advertising & PR" },
      { category: "Education" },
      { category: "Customer Service" },
      { category: "Sales" },
      { category: "IT & Networking" },
      { category: "Hotels & Tourism" },
      { category: "Clerical & Administration" },
      { category: "Human Resources" },
      { category: "Accounting & Finance" },
      { category: "Manufacturing" },
      { category: "Medical" },
      { category: "Domestic Staff" },
      { category: "Part - Time" },
      { category: "Other Jobs" },

    ]

  },
  {
    name: "Animals",
    icon: <RiBearSmileFill fontSize = "large" />,
    categories: [
      { category: "Fish & Aquariums" },
      { category: "Birds" },
      { category: "Hens & Aseel" },
      { category: "Cats" },
      { category: "Dogs" },
      { category: "Livestock" },
      { category: "Horses" },
      { category: "Pet Food & Accessories" },
      { category: "Other Animals" }
    ]
    },
  {
    name: "Furniture & Home Decore",
    icon: <GiSofa fontSize = "large" />,
    categories: [
      { category: "Sofa & Chairs" },
      { category: "Beds & Wardrobes" },
      { category: "Home Decoration" },
      { category: "Tablets & Dining" },
      { category: "Garden & Outdoor" },
      { category: "Painting & Mirrors" },
      { category: "Rugs & Carpets" },
      { category: "Curtains & Blinds" },
      { category: "Office Furniture" },
      { category: "Other Household Items" }
    ]

  },
  {
    name: "Fashion & Beauty",
    icon: <FaTshirt fontSize = "large" />,
    categories: [
      { category: "Accessories" },
      { category: "Clothes" },
      { category: "Footwear" },
      { category: "Jewellery" },
      { category: "Make Up" },
      { category: "Skin & Hair" },
      { category: "Watches" },
      { category: "Wedding" },
      { category: "Lawn & Pret" },
      { category: "Couture" },
      { category: "Other Fashion" }
    ]
    },
  {
    name: "Books, Sports & Hoobies",
    icon: <FaGuitar fontSize = "large" />,
    categories: [
      { category: "Books & Magazines" },
      { category: "Musical Instruments" },
      { category: "Sports Equipment" },
      { category: "Gym & Fitness" },
      { category: "Other Hobbies" }
    ]

  },
  {
    name: "Kids",
    icon: <FaBaby fontSize = "large" />,
    categories: [
      { category: "Kids Furniture" },
      { category: "Toys" },
      { category: "Prams & Walkers" },
      { category: "Swings & Slides" },
      { category: "Kids Bikes" },
      { category: "Kids Accessories" }
    ]
    }
  ]
}

const CategoriesReducer = (state = initialState) => {
    return state;
    }

export default CategoriesReducer;