import health from "../images/ai/health.png";
import aero from "../images/ai/aero.png";


const Categories = [

    {
        id: 1,
        name: "AC Repair Services"
    },
    {
        id: 2,
        name: "Adoption Agencies",
    },
    {
        id: 3,
        name: "Aerospace"
    },
    {
        id: 4,
        name: "Air Transport"
    },
    {
        id: 5,
        name: "Air Travel",
    },
    {
        id: 6,
        name: "Airport services"
    },
    {
        id: 7,
        name: "Aluminium Openings"
    },
    {
        id: 8,
        name: "Animal Shelters"
    },
    {

        name: "Apartments",
        id: 9
    },
    {
        id: 10,
        name: "Architectural Service"
    },
    {
        id: 11,
        name: "Art Gallery"
    },
    {
        id: 12,
        name: "Arts and Crafts",
    }, {
        id: 13,
        name: "Attractions",
    },
    {
        id: 14,
        name: "Audit and Accounting"
    },
    {
        id: 15,
        name: "Auto Dealers- New and Used"
    },
    {
        id: 16,
        name: "Auto Insurance"
    },
    {
        id: 17,
        name: "Auto Parts- New and Used"
    },
    {
        id: 18,
        name: "Auto Repair"
    },
    {
        id: 19,
        name: "Auto Services"
    },
    {
        id: 20,
        name: "Auto Supplies"
    }
    ,
    {
        id: 21,
        name: "Auto mobile services"
    },
    {
        id: 22,
        name: "Automotive"
    },
    {
        id: 24,
        name: "Aviation"
    },
    {
        id: 25,
        name: "Baby Sitters"
    },
    {
        id: 26,
        name: "Baker"
    },
    {
        id: 27,
        name: "Banking Equipment"
    },
    {
        id: 28,
        name: "Banks, Credit Unions"
    },
    {
        id: 29,
        name: "Barbing services"
    },
    {
        id: 30,
        name: "Bars and night clubs"
    },
    {
        id: 31,
        name: "Beauty Products"
    },
    {
        id: 32,
        name: "Beauty Professionals"
    },
    {
        id: 33,
        name: "Beauty Salon"
    },
    {
        id: 34,
        name: "Beauty school"
    },
    {
        id: 35,
        name: "Bed and Breakfast"
    },
    {
        id: 36,
        name: "Beverages company"
    },
    {
        id: 37,
        name: "Bicycles"
    },
    {
        id: 38,
        name: "Block and Brick Manufacturing"
    },
    {
        id: 39,
        name: "Boats and Boating"
    },
    {
        id: 40,
        name: "Book stores"
    },
    {
        id: 41,
        name: "Bookmakers"
    },
    {
        id: 42,
        name: "Books",
    },
    {
        id: 43,
        name: "Boutiques"
    },
    {
        id: 45,
        name: "Brand Name"
    },
    {
        id: 46,
        name: "Brand influencers"
    },
    {
        id: 47,
        name: "Branding and advertising"
    },
    {
        id: 48,
        name: "Breweries"
    },
    {
        id: 49,
        name: "Bridal Shop"
    },
    {
        id: 50,
        name: "Building Materials"
    },
    {
        id: 51,
        name: "Bus Line"
    },
    {
        id: 52,
        name: "Business Education"
    },
    {
        id: 53,
        name: "Business Management Consulting"
    },
    {
        id: 55,
        name: "Business to Business"
    },
    {
        id: 56,
        name: "Cafes"
    },
    {
        id: 57,
        name: "Camping and Caravans"
    },
    {
        id: 58,
        name: "Camping and Outdoors"
    },
    {
        id: 59,
        name: "Carpentry"
    },
    {
        id: 60,
        name: "Car Parts and Accessories"
    }, {
        id: 61,
        name: "Car Rental"
    }, {
        id: 62,
        name: "Car Wash"
    }, {
        id: 63,
        name: "Cargo Services"
    },
    {
        id: 64,
        name: "Carpentry"
    },
    {
        id: 65,
        name: "Casinos"
    },
    {
        id: 66,
        name: "Catering"
    }, {
        id: 67,
        name: "Catering Equipment"
    },
    {
        id: 68,
        name: "Chemicals"
    },
    {
        id: 69,
        name: "Children clothing stores"
    },
    {
        id: 70,
        name: "Children's Services"
    }, {
        id: 71,
        name: "Cigars and Tobacco"
    }, {
        id: 72,
        name: "Civil Engineering"
    }, {
        id: 73,
        name: "Clearing and Forwarding"
    }, {
        id: 74,
        name: "Clothing and Accessories"
    }, {
        id: 75,
        name: "Club"
    },
    {
        id: 347,
        name: "cocktails"
    },
    {
        id: 348,
        name: "Cocktail Catering"
    },{
        id: 76,
        name: "Cold Storage Services"
    },
    {
        id: 77,
        name: "Colleges"
    }, {
        id: 78,
        name: "Communications"
    }, {
        id: 79,
        name: "Complementary Therapy"
    },
    {
        id: 80,
        name: "Computer Consumables"
    },
    {
        id: 81,
        name: "Computer Engineers"
    },
    {
        id: 82,
        name: "Computer Repair"
    }, {
        id: 83,
        name: "Computer Services"
    }, {
        id: 84,
        name: "Computer Software Solution"
    }, {
        id: 85,
        name: "Computer Training"
    }, {
        id: 86,
        name: "Computers and Internet"
    }, {
        id: 87,
        name: "Concrete",
    }, {
        id: 88,
        name:
            "Confectioneries"
    }, {
        id: 89,
        name: "Conferences"
    }, {
        id: 90,
        name: "Construction"
    },
    {
        id: 91,
        name: "Construction Equipment"
    }, {
        id: 92,
        name: "Construction Services"
    }, {
        id: 93,
        name: "Construction Training"
    }, {
        id: 94,
        name: "Consultant"
    }, {
        id: 95,
        name: "Consultants"
    }, {
        id: 96,
        name: "Contractors"
    }, {
        id: 97,
        name: "Cookery"
    }, {
        id: 98,
        name: "Cosmetic Surgery"
    }, {
        id: 99,
        name: "Cosmetologists"
    }, {
        id: 100,
        name: "Cottages"
    }, {
        id: 101,
        name: "Courier Services"
    }, {
        id: 102,
        name: "Cremation Service"
    }, {
        id: 103,
        name: "Cruises"
    }, {
        id: 104,
        name: "Cryptocurrency"
    }, {
        id: 105,
        name: "Culture"
    }, {
        id: 106,
        name: "Decorators"
    }, {
        id: 107,
        name: "Dentists"
    }
    , {
        id: 108,
        name: "Department Stores"
    }, {
        id: 109,
        name: "Dept Counseling"
    }, {
        id: 110,
        name: "Dermatologist"
    }, {
        id: 110,
        name: "Diagnostics center"
    }, {
        id: 111,
        name: "Diaper services"
    }, {
        id: 112,
        name: "Discount Stores"
    }, {
        id: 113,
        name: "Disinfecting Services"
    }, {
        id: 114,
        name: "Dispatch Delivery Services"

    }, {
        id: 115,
        name: "Doctors and Clinics"
    }, {
        id: 116,
        name: "Dog Walking"
    }, {
        id: 117,
        name: "Doors"
    }, {
        id: 118,
        name: "Driving Schools"
    }, {
        id: 119,
        name: "Dry cleaning services"
    }, {
        id: 120,
        name:
            "Drywall"
    }, {
        id: 121,
        name: "Duty Free Shop"
    }, {
        id: 122,
        name: "Eateries Restaurants"
    }, {
        id: 123,
        name: "Education"
    }, {
        id: 124,
        name: "Electrical Goods"
    }, {
        id: 125,
        name: "Electrical Service"
    }, {
        id: 126,
        name: "Embassies"
    }, {
        id: 127,
        name: "Energy Suppliers"
    }, {
        id: 128,
        name: "Engineer"
    }, {
        id: 129,
        name: "Engineering"
    }, {
        id: 130,
        name: "Entertainment and Media"
    }, {
        id: 131,
        name: "Environmental Services"
    }, {
        id: 132,
        name: "Event Equipment"
    }, {
        id: 133,
        name: "Event Services"
    }, {
        id: 134,
        name: "Event centers"
    }, {
        id: 135,
        name: "Event planners Managers"
    }, {
        id: 136,
        name: "Events and Conferences"
    }, {
        id: 137,
        name: "Excavators"
    }, {
        id: 138,
        name: "Excursions"
    }, {
        id: 139,
        name: "Exterminating and Disinfecting"
    }, {
        id: 140,
        name: "Fabrics"
    }, {
        id: 141,
        name: "Farm and food produce"
    }, {
        id: 141,
        name: "Farming"
    }, {
        id: 142,
        name: "Fashion"
    }, {
        id: 143,
        name: "Fax services"
    }, {
        id: 144,
        name: "Fencing and Fence Materials"
    }, {
        id: 145,
        name: "Film, Television and Video"
    }, {
        id: 146,
        name: "Finances and Insurance"
    }, {
        id: 147,
        name: "Financial Activity"
    }, {
        id: 148,
        name: "Fire Safety Consultants"
    }, {
        id: 149,
        name: "Firearms"
    }, {
        id: 150,
        name: "Fisheries"
    }, {
        id: 151,
        name: "Fishing Equipment"
    }, {
        id: 152,
        name: "Fitness"
    }, {
        id: 153,
        name: "Fitness Trainers services"
    }, {
        id: 154,
        name: "Food & Beverage Company"
    }, {
        id: 155,
        name: "Food Distributors"
    }, {
        id: 156,
        name: "Food Manufacturing"
    }, {
        id: 157,
        name: "Food Retailer"
    }, {
        id: 158,
        name: "Food and Drink"
    }, {
        id: 159,
        name: "Food catering services"
    }, {
        id: 160,
        name: "Forestry"
    }, {
        id: 161,
        name: "Furniture Manufacturers"
    }, {
        id: 162,
        name: "Gadget"
    }, {
        id: 163,
        name: "Gadgets"
    }, {
        id: 164,
        name: "Gambling"
    }, {
        id: 165,
        name: "Garbage Removal"
    }, {
        id: 166,
        name: "Gardeners"
    }, {
        id: 167,
        name: "General Office Services"
    }, {
        id: 168,
        name: "General business"
    }, {
        id: 169,
        name: "Gifts"
    }, {
        id: 170,
        name: "Glass Manufacturing"
    }, {
        id: 171,
        name: "Government Services"
    }, {
        id: 172,
        name: "Grocery stores"
    }, {
        id: 360,
        name: "Grocery shopper"
    },
    {
        id: 173,
        name: "Guest Houses"
    }, {
        id: 174,
        name: "Gynecologist"
    }, {
        id: 175,
        name: "Hair vendors"
    }, {
        id: 176,
        name: "Hairdressers"
    }, {
        id: 176,
        name: "Handyman"
    }, {
        id: 171,
        name: "Hardware Store"
    }, {
        id: 172,
        name: "Haulage"
    }, {
        id: 173,
        name: "Health Care"
    }, {
        id: 174,
        name: "Health and Beauty"
    }, {
        id: 175,
        name: "Health and Safety"
    }, {
        id: 176,
        name: "Healthy Food companies"
    }, {
        id: 178,
        name: "Hobbies"
    }, {
        id: 179,
        name: "Holiday Homes"
    }, {
        id: 180,
        name: "Home and Garden"
    }, {
        id: 181,
        name: "Horticulture services"
    }, {
        id: 182,
        name: "Hotel and Motel Equipment"
    }, {
        id: 182,
        name: "Hotels"
    }, {
        id: 183,
        name: "Hotels/ Hospitality services"
    }, {
        id: 184,
        name: "Human Resources"
    }, {
        id: 185,
        name: "Hunting"
    }, {
        id: 186,
        name: "Industrial Automation"
    }, {
        id: 187,
        name: "Industrial Equipment"
    }, {
        id: 189,

        name: "Industrial Premises"
    }, {
        id: 190,
        name: "Industrial Services"
    }, {
        id: 191,
        name: "Industrial Supplies"
    }, {
        id: 192,
        name: "Information Technology"
    }, {
        id: 193,
        name: "Interior Decorators"
    }, {
        id: 194,
        name: "Internet Service Providers"
    }, {
        id: 195,
        name: "Investment Companies"
    }, {
        id: 196,
        name: "Jeweller"
    }, {
        id: 197,
        name: "Job advertising agencies"
    }, {
        id: 198,
        name: "Junk Dealers"
    }, {
        id: 199,
        name: "Kennels"
    }, {
        id: 200,
        name: "Kids"
    }, {
        id: 201,
        name: "Laundry and Cleaning"
    }, {
        id: 202,
        name: "Lawyers"
    }, {
        id: 204,
        name: "Leasing"
    }, {
        id: 205,
        name: "Legal"
    }, {
        id: 206,
        name: "Legal Services"
    }, {
        id: 207,
        name: "Legal Services"
    }, {
        id: 208,
        name: "Leisure"
    }, {
        id: 209,
        name: "Lifestyle Management"
    }, {
        id: 210,
        name: "Limousines"
    }, {
        id: 211,
        name: "Local Authorities"
    }, {
        id: 212,
        name: "Locksmiths"
    }, {
        id: 213,
        name: "Logistics"
    }, {
        id: 214,
        name: "Lumber"
    }, {
        id: 215,
        name: "Mail Services"
    }, {
        id: 216,
        name: "Manufacturing and Industry"
    }, {
        id: 217,
        name: "Marine Services"
    }, {
        id: 218,
        name: "Market Research"
    }, {
        id: 219,
        name: "Massage Therapist"
    }, {
        id: 220,
        name: "Mechanics"
    }, {
        id: 221,
        name: "Medical Equipment"
    }, {
        id: 222,
        name: "Membership Services"
    }, {
        id: 223,
        name: "Mental Health Car"
    }, {
        id: 224,
        name: "Metals"
    }, {
        id: 225,
        name: "Mobile Phone Shops"
    }, {
        id: 226,
        name: "Mobility Aids"
    }, {
        id: 227,
        name: "Money Service Business"
    }, {
        id: 228,
        name: "Motorbikes"
    }, {
        id: 229,
        name: "Music"
    }, {
        id: 230,
        name: "Music"
    }, {
        id: 231,
        name: "Nanny Agency"
    }, {
        id: 232,
        name: "Nanny Child care services"
    }, {
        id: 233,
        name: "Network service provider"
    }, {
        id: 234,
        name: "Networking"
    }, {
        id: 235,
        name: "Newspapers"
    }, {
        id: 236,
        name: "Nursing and Car"
    }, {
        id: 237,
        name: "Oil and Gas Companies"
    }, {
        id: 238,
        name: "Online Content"
    }, {
        id: 239,
        name: "Optical Shop"
    }, {
        id: 240,
        name: "Optician"
    }, {
        id: 241,
        name: "Optician"
    }, {
        id: 242,
        name: "Organization"
    }, {
        id: 243,
        name: "Outlets"
    }, {
        id: 244,
        name: "Overseas Business"
    }, {
        id: 245,
        name: "Package Shipping"
    }, {
        id: 246,
        name: "Paga agents"
    }, {
        id: 247,
        name: "Paper Products"
    }, {
        id: 248,
        name: "Parties"
    }, {
        id: 249,
        name: "Pawnshops"
    }, {
        id: 250,
        name: "Payroll Services"
    }, {
        id: 251,
        name: "Performing Arts"
    }, {
        id: 252,
        name: "Personal shoppers"
    }, {
        id: 253,
        name: "Pet Grooming"
    }, {
        id: 254,
        name: "Pet Shops"
    }, {
        id: 255,
        name: "Petrol Station"
    }, {
        id: 256,
        name: "Pets and Animals"
    }, {
        id: 257,
        name: "Pharmacies"
    }, {
        id: 258,
        name: "Photography"
    }, {
        id: 259,
        name: "Piercing services"
    }, {
        id: 260,
        name: "Places to Visit"
    }, {
        id: 261,
        name: "Plumbers"
    }, {
        id: 262,
        name: "Ports and Harbours"
    }, {
        id: 263,
        name: "Poultry"
    }, {
        id: 264,
        name: "Pregnancy and Child Birth"
    }, {
        id: 265,
        name: "Printing"
    }, {
        id: 266,
        name: "Printing press"
    }, {
        id: 267,
        name: "Product Development"
    }, {
        id: 268,
        name: "Public Relations"
    }, {
        id: 269,
        name: "Public and Social Services"
    }, {
        id: 270,
        name: "Publishers"
    }, {
        id: 271,
        name: "Pubs and Clubs"
    }, {
        id: 272,
        name: "Pumps Manufacturers"
    }, {
        id: 273,
        name: "Rail Transport"
    }, {
        id: 274,
        name: "Recreation"
    }, {
        id: 275,
        name: "Recycling"
    }, {
        id: 276,
        name: "Religion"
    }, {
        id: 277,
        name: "Remodeling"
    }, {
        id: 278,
        name: "Resorts"
    }, {
        id: 279,
        name: "Restaurants"
    }, {
        id: 280,
        name: "Retail Services"
    }, {
        id: 281,
        name: "Roofing"
    }, {
        id: 282,
        name: "Sales Outsourcing"
    }, {
        id: 283,
        name: "Sandblasting"
    }, {
        id: 284,
        name: "Scanning Service"
    }, {
        id: 285,
        name: "Schools"
    }, {
        id: 286,
        name: "Science"
    }, {
        id: 287,
        name: "Secondhand Stores"
    }, {
        id: 289,
        name: "Secretarial Services"
    }, {
        id: 290,
        name: "Security services"
    }, {
        id: 291,
        name: "Self Catering Accommodation"
    }, {
        id: 292,
        name: "Sewing and Needlework"
    }, {
        id: 293,
        name: "Shopping"
    }, {
        id: 294,
        name: "Shopping Centres"
    }, {
        id: 295,
        name: "Sightseeing"
    }, {
        id: 295,
        name: "Small Business"
    }, {
        id: 296,
        name: "Software Applications"
    }, {
        id: 297,
        name: "Solar Panels"
    }, {
        id: 298,
        name: "Solicitors"
    }, {
        id: 299,
        name: "Spa Henna services"
    }, {
        id: 300,
        name: "Specialist Accommodation"
    }, {
        id: 301,
        name: "Spirituality"
    }, {
        id: 302,
        name: "Sports"
    }, {
        id: 303,
        name: "Stationeries"
    }, {
        id: 304,
        name: "Steel Products"
    }, {
        id: 305,
        name: "Storage Services"
    }, {
        id: 306,
        name: "Supermarket"
    }, {
        id: 307,
        name: "Surprise Companies"
    }, {
        id: 308,
        name: "Tailors and Alterations"
    }, {
        id: 309,
        name: "Take Aways"
    }, {
        id: 310,
        name: "Tax Consultants"
    }, {
        id: 312,
        name: "Taxis"
    }, {
        id: 313,
        name: "Telecommunications providers"
    }, {
        id: 314,
        name: "Textile"
    }, {
        id: 315,
        name: "Timeshares"
    }, {
        id: 316,
        name: "Tire Dealers"
    }, {
        id: 317,
        name: "Tour Operator"
    }, {
        id: 318,
        name: "Tourism and Accommodation"
    }, {
        id: 319,
        name: "Tourist Information"
    }, {
        id: 320,
        name: "Towing Service"
    }, {
        id: 321,
        name: "Tradesmen and Construction"
    }, {
        id: 322,
        name: "Training"
    }, {
        id: 323,
        name: "Translation Services"
    }, {
        id: 324,
        name: "Transport"
    }, {
        id: 325,
        name: "Transport Agents"
    }, {
        id: 326,
        name: "Transport and Motoring"
    }, {
        id: 327,
        name: "Travel Agent"
    }, {
        id: 328,
        name: "Tree Service"
    }, {
        id: 329,
        name: "Universities"
    }, {
        id: 330,
        name: "Utilities"
    }, {
        id: 331,
        name: "Vehicle Manufacturers"
    }, {
        id: 332,
        name: "Vehicle Sales"
    }, {
        id: 333,
        name: "Vehicle Services"
    }, {
        id: 334,
        name: "Vets and Veterinary"
    }, {
        id: 335,
        name: "Visa Agencies"
    }, {
        id: 336,
        name: "Vitamins and Supplements"
    }, {
        id: 337,
        name: "Water Treatment"
    }, {
        id: 338,
        name: "Web Design"
    }, {
        id: 339,
        name: "Web Development"
    }, {
        id: 340,
        name: "Web Hosting"
    }, {
        id: 341,
        name: "Web Services"
    }, {
        id: 342,
        name: "Weddings"
    }, {
        id: 343,
        name: "Wholesale Retail online shops"
    }, {
        id: 344,
        name: "Wills and Trusts"
    }, {
        id: 345,
        name: "Windows"
    }, {
        id: 346,
        name: "Wine and Beer"
    }

];

export default Categories;