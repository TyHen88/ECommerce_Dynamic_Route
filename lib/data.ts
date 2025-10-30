// Static data to replace Supabase database
export interface Product {
    id: string
    name: string
    description: string
    price: number
    image_url: {
        url: string
        alt: string
    }[]
    stock: number
    category: string
    created_at: string
}

export interface User {
    id: string
    email: string
    role: 'admin' | 'user'
    created_at: string
}

// Static products data
export const products: Product[] =
    [
        {
            "id": "1",
            "name": "Wireless Headphones",
            "description": "Premium noise-cancelling wireless headphones with 30-hour battery life",
            "price": 299.99,
            "image_url": [
                {
                    "url": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
                    "alt": "Wireless Headphones – front view"
                },
                {
                    "url": "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&q=80",
                    "alt": "Wireless Headphones – side view"
                },
                {
                    "url": "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&q=80",
                    "alt": "Wireless Headphones – folded"
                }
            ],
            "stock": 50,
            "category": "Electronics",
            "created_at": "2024-01-01T00:00:00Z"
        },
        {
            "id": "2",
            "name": "Smart Watch",
            "description": "Fitness tracking smartwatch with heart rate monitor and GPS",
            "price": 399.99,
            "image_url": [
                {
                    "url": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
                    "alt": "Smart Watch – on wrist"
                },
                {
                    "url": "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&q=80",
                    "alt": "Smart Watch – display close-up"
                }
            ],
            "stock": 30,
            "category": "Electronics",
            "created_at": "2024-01-02T00:00:00Z"
        },
        {
            "id": "3",
            "name": "Laptop Backpack",
            "description": "Durable water-resistant backpack with padded laptop compartment",
            "price": 79.99,
            "image_url": [
                {
                    "url": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
                    "alt": "Laptop Backpack – full view"
                },
                {
                    "url": "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=800&q=80",
                    "alt": "Laptop Backpack – side view"
                }
            ],
            "stock": 100,
            "category": "Accessories",
            "created_at": "2024-01-03T00:00:00Z"
        },
        {
            "id": "4",
            "name": "Mechanical Keyboard",
            "description": "RGB mechanical gaming keyboard with customizable keys",
            "price": 149.99,
            "image_url": [
                {
                    "url": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&q=80",
                    "alt": "Mechanical Keyboard – top view"
                },
                {
                    "url": "https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&q=80",
                    "alt": "Mechanical Keyboard – RGB lighting"
                }
            ],
            "stock": 45,
            "category": "Electronics",
            "created_at": "2024-01-04T00:00:00Z"
        },
        {
            "id": "5",
            "name": "Portable Charger",
            "description": "20000mAh fast-charging portable power bank",
            "price": 49.99,
            "image_url": [
                {
                    "url": "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=800&q=80",
                    "alt": "Portable Charger – front"
                },
                {
                    "url": "https://images.unsplash.com/photo-1606936555111-1488a7b0cf6e?w=800&q=80",
                    "alt": "Portable Charger – in use"
                }
            ],
            "stock": 200,
            "category": "Accessories",
            "created_at": "2024-01-05T00:00:00Z"
        },
        {
            "id": "6",
            "name": "Wireless Mouse",
            "description": "Ergonomic wireless mouse with precision tracking",
            "price": 59.99,
            "image_url": [
                {
                    "url": "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&q=80",
                    "alt": "Wireless Mouse – top view"
                },
                {
                    "url": "https://images.unsplash.com/photo-1586920740099-e5e4f5e6d8e2?w=800&q=80",
                    "alt": "Wireless Mouse – side profile"
                }
            ],
            "stock": 75,
            "category": "Electronics",
            "created_at": "2024-01-06T00:00:00Z"
        },
        {
            "id": "7",
            "name": "USB-C Hub",
            "description": "7-in-1 USB-C hub with HDMI, USB 3.0, and SD card reader",
            "price": 89.99,
            "image_url": [
                {
                    "url": "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=800&q=80",
                    "alt": "USB-C Hub – all ports"
                },
                {
                    "url": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&q=80",
                    "alt": "USB-C Hub – close-up"
                }
            ],
            "stock": 60,
            "category": "Accessories",
            "created_at": "2024-01-07T00:00:00Z"
        },
        {
            "id": "8",
            "name": "Desk Lamp",
            "description": "LED desk lamp with adjustable brightness and color temperature",
            "price": 69.99,
            "image_url": [
                {
                    "url": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80",
                    "alt": "Desk Lamp – on desk"
                },
                {
                    "url": "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800&q=80",
                    "alt": "Desk Lamp – adjusted position"
                }
            ],
            "stock": 40,
            "category": "Home",
            "created_at": "2024-01-08T00:00:00Z"
        },
        {
            "id": "9",
            "name": "Phone Stand",
            "description": "Adjustable aluminum phone and tablet stand",
            "price": 29.99,
            "image_url": [
                {
                    "url": "https://images.unsplash.com/photo-1519864600265-abb23847ef02?w=800&q=80",
                    "alt": "Phone Stand – with phone"
                },
                {
                    "url": "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&q=80",
                    "alt": "Phone Stand – on desk"
                }
            ],
            "stock": 150,
            "category": "Accessories",
            "created_at": "2024-01-09T00:00:00Z"
        },
        {
            "id": "10",
            "name": "Cable Organizer",
            "description": "Silicone cable management clips set of 10",
            "price": 14.99,
            "image_url": [
                {
                    "url": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
                    "alt": "Cable Organizer – set"
                },
                {
                    "url": "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80",
                    "alt": "Cable Organizer – desk setup"
                }
            ],
            "stock": 300,
            "category": "Accessories",
            "created_at": "2024-01-10T00:00:00Z"
        },
        {
            "id": "11",
            "name": "Bluetooth Speaker",
            "description": "Portable waterproof Bluetooth speaker with 360-degree sound",
            "price": 89.99,
            "image_url": [
                {
                    "url": "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&q=80",
                    "alt": "Bluetooth Speaker – front view"
                },
                {
                    "url": "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&q=80",
                    "alt": "Bluetooth Speaker – outdoor"
                }
            ],
            "stock": 65,
            "category": "Electronics",
            "created_at": "2024-01-11T00:00:00Z"
        },
        {
            "id": "12",
            "name": "Webcam HD",
            "description": "1080p HD webcam with auto-focus and built-in microphone",
            "price": 79.99,
            "image_url": [
                {
                    "url": "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=800&q=80",
                    "alt": "Webcam HD – front"
                },
                {
                    "url": "https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=800&q=80",
                    "alt": "Webcam HD – mounted"
                }
            ],
            "stock": 55,
            "category": "Electronics",
            "created_at": "2024-01-12T00:00:00Z"
        },
        {
            "id": "13",
            "name": "External SSD",
            "description": "1TB portable external SSD with USB-C connectivity",
            "price": 149.99,
            "image_url": [
                {
                    "url": "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=800&q=80",
                    "alt": "External SSD – product shot"
                },
                {
                    "url": "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=800&q=80",
                    "alt": "External SSD – with cable"
                }
            ],
            "stock": 80,
            "category": "Electronics",
            "created_at": "2024-01-13T00:00:00Z"
        },
        {
            "id": "14",
            "name": "Gaming Headset",
            "description": "7.1 surround sound gaming headset with RGB lighting",
            "price": 129.99,
            "image_url": [
                {
                    "url": "https://images.unsplash.com/photo-1599669454699-248893623440?w=800&q=80",
                    "alt": "Gaming Headset – side view"
                },
                {
                    "url": "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=800&q=80",
                    "alt": "Gaming Headset – RGB lights"
                }
            ],
            "stock": 70,
            "category": "Electronics",
            "created_at": "2024-01-14T00:00:00Z"
        },
        {
            "id": "15",
            "name": "Monitor Stand",
            "description": "Adjustable aluminum monitor stand with cable management",
            "price": 49.99,
            "image_url": [
                {
                    "url": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&q=80",
                    "alt": "Monitor Stand – with monitor"
                },
                {
                    "url": "https://images.unsplash.com/photo-1527443195645-1133f7f28990?w=800&q=80",
                    "alt": "Monitor Stand – side angle"
                }
            ],
            "stock": 90,
            "category": "Accessories",
            "created_at": "2024-01-15T00:00:00Z"
        },
        {
            "id": "16",
            "name": "Wireless Earbuds",
            "description": "True wireless earbuds with active noise cancellation",
            "price": 179.99,
            "image_url": [
                {
                    "url": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=80",
                    "alt": "Wireless Earbuds – case open"
                },
                {
                    "url": "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=800&q=80",
                    "alt": "Wireless Earbuds – in ear"
                }
            ],
            "stock": 110,
            "category": "Electronics",
            "created_at": "2024-01-16T00:00:00Z"
        },
        {
            "id": "17",
            "name": "Smart Light Bulb",
            "description": "WiFi RGB smart bulb with voice control compatibility",
            "price": 24.99,
            "image_url": [
                {
                    "url": "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=800&q=80",
                    "alt": "Smart Light Bulb – glowing"
                },
                {
                    "url": "https://images.unsplash.com/photo-1550985616-10810253b84d?w=800&q=80",
                    "alt": "Smart Light Bulb – color change"
                }
            ],
            "stock": 200,
            "category": "Home",
            "created_at": "2024-01-17T00:00:00Z"
        },
        {
            "id": "18",
            "name": "Fitness Tracker",
            "description": "Water-resistant fitness band with heart rate and sleep tracking",
            "price": 59.99,
            "image_url": [
                {
                    "url": "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=800&q=80",
                    "alt": "Fitness Tracker – on wrist"
                },
                {
                    "url": "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?w=800&q=80",
                    "alt": "Fitness Tracker – display"
                }
            ],
            "stock": 140,
            "category": "Electronics",
            "created_at": "2024-01-18T00:00:00Z"
        },
        {
            "id": "19",
            "name": "Ring Light",
            "description": "12-inch LED ring light with tripod for photography and videos",
            "price": 69.99,
            "image_url": [
                {
                    "url": "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80",
                    "alt": "Ring Light – front view"
                },
                {
                    "url": "https://images.unsplash.com/photo-1598550487146-3750bf282bb9?w=800&q=80",
                    "alt": "Ring Light – in use"
                }
            ],
            "stock": 75,
            "category": "Electronics",
            "created_at": "2024-01-19T00:00:00Z"
        },
        {
            "id": "20",
            "name": "Laptop Stand",
            "description": "Ergonomic aluminum laptop stand with ventilation design",
            "price": 39.99,
            "image_url": [
                {
                    "url": "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&q=80",
                    "alt": "Laptop Stand – with laptop"
                },
                {
                    "url": "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=800&q=80",
                    "alt": "Laptop Stand – side view"
                }
            ],
            "stock": 95,
            "category": "Accessories",
            "created_at": "2024-01-20T00:00:00Z"
        },
        {
            "id": "21",
            "name": "Electric Toothbrush",
            "description": "Sonic electric toothbrush with 5 brushing modes and travel case",
            "price": 89.99,
            "image_url": [
                {
                    "url": "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=800&q=80",
                    "alt": "Electric Toothbrush – standing"
                },
                {
                    "url": "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&q=80",
                    "alt": "Electric Toothbrush – with case"
                }
            ],
            "stock": 65,
            "category": "Home",
            "created_at": "2024-01-21T00:00:00Z"
        },
        {
            "id": "22",
            "name": "Smart Thermostat",
            "description": "WiFi smart thermostat with energy-saving features and app control",
            "price": 179.99,
            "image_url": [
                {
                    "url": "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?w=800&q=80",
                    "alt": "Smart Thermostat – wall mounted"
                },
                {
                    "url": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
                    "alt": "Smart Thermostat – display"
                }
            ],
            "stock": 50,
            "category": "Home",
            "created_at": "2024-01-22T00:00:00Z"
        },
        {
            "id": "23",
            "name": "Digital Photo Frame",
            "description": "10-inch WiFi digital photo frame with cloud sync",
            "price": 129.99,
            "image_url": [
                {
                    "url": "https://images.unsplash.com/photo-1533073526757-2c8ca1df9f1c?w=800&q=80",
                    "alt": "Digital Photo Frame – displaying photo"
                },
                {
                    "url": "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80",
                    "alt": "Digital Photo Frame – on shelf"
                }
            ],
            "stock": 45,
            "category": "Home",
            "created_at": "2024-01-23T00:00:00Z"
        },
        {
            "id": "24",
            "name": "Portable Monitor",
            "description": "15.6-inch portable USB-C monitor for laptops",
            "price": 199.99,
            "image_url": [
                {
                    "url": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
                    "alt": "Portable Monitor – connected"
                },
                {
                    "url": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
                    "alt": "Portable Monitor – setup"
                }
            ],
            "stock": 55,
            "category": "Electronics",
            "created_at": "2024-01-24T00:00:00Z"
        },
        {
            "id": "25",
            "name": "Smart Doorbell",
            "description": "Video doorbell with motion detection and two-way audio",
            "price": 149.99,
            "image_url": [
                {
                    "url": "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
                    "alt": "Smart Doorbell – mounted"
                },
                {
                    "url": "https://images.unsplash.com/photo-1585421514738-01798e348b17?w=800&q=80",
                    "alt": "Smart Doorbell – app view"
                }
            ],
            "stock": 60,
            "category": "Home",
            "created_at": "2024-01-25T00:00:00Z"
        },
        {
            "id": "26",
            "name": "Air Purifier",
            "description": "HEPA air purifier with smart sensor and quiet operation",
            "price": 199.99,
            "image_url": [
                {
                    "url": "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80",
                    "alt": "Air Purifier – in room"
                },
                {
                    "url": "https://images.unsplash.com/photo-1635670235033-c0e5ba7e1d7a?w=800&q=80",
                    "alt": "Air Purifier – close-up"
                }
            ],
            "stock": 40,
            "category": "Home",
            "created_at": "2024-01-26T00:00:00Z"
        },
        {
            "id": "27",
            "name": "Coffee Maker",
            "description": "Programmable coffee maker with thermal carafe",
            "price": 119.99,
            "image_url": [
                {
                    "url": "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=800&q=80",
                    "alt": "Coffee Maker – brewing"
                },
                {
                    "url": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&q=80",
                    "alt": "Coffee Maker – on counter"
                }
            ],
            "stock": 70,
            "category": "Home",
            "created_at": "2024-01-27T00:00:00Z"
        },
        {
            "id": "28",
            "name": "Robot Vacuum",
            "description": "Smart robot vacuum with mapping and app control",
            "price": 299.99,
            "image_url": [
                {
                    "url": "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80",
                    "alt": "Robot Vacuum – cleaning"
                },
                {
                    "url": "https://images.unsplash.com/photo-1625945690600-bafc49dae4ba?w=800&q=80",
                    "alt": "Robot Vacuum – docking"
                }
            ],
            "stock": 35,
            "category": "Home",
            "created_at": "2024-01-28T00:00:00Z"
        },
        {
            "id": "29",
            "name": "Electric Kettle",
            "description": "Temperature control electric kettle with keep-warm function",
            "price": 79.99,
            "image_url": [
                {
                    "url": "https://images.unsplash.com/photo-1563299796-17596ed6b017?w=800&q=80",
                    "alt": "Electric Kettle – pouring"
                },
                {
                    "url": "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?w=800&q=80",
                    "alt": "Electric Kettle – on base"
                }
            ],
            "stock": 85,
            "category": "Home",
            "created_at": "2024-01-29T00:00:00Z"
        },
        {
            "id": "30",
            "name": "Tablet",
            "description": "10-inch tablet with 128GB storage and stylus support",
            "price": 349.99,
            "image_url": [
                {
                    "url": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&q=80",
                    "alt": "Tablet – front view"
                },
                {
                    "url": "https://images.unsplash.com/photo-1585790050230-5dd28404f3ca?w=800&q=80",
                    "alt": "Tablet – with stylus"
                }
            ],
            "stock": 45,
            "category": "Electronics",
            "created_at": "2024-01-30T00:00:00Z"
        },
        {
            "id": "31",
            "name": "Action Camera",
            "description": "4K action camera with waterproof case and stabilization",
            "price": 249.99,
            "image_url": [
                {
                    "url": "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&q=80",
                    "alt": "Action Camera – front"
                },
                {
                    "url": "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&q=80",
                    "alt": "Action Camera – mounted"
                }
            ],
            "stock": 50,
            "category": "Electronics",
            "created_at": "2024-01-31T00:00:00Z"
        },
        {
            "id": "32",
            "name": "Projector",
            "description": "Mini portable projector with WiFi and Bluetooth connectivity",
            "price": 279.99,
            "image_url": [
                {
                    "url": "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&q=80",
                    "alt": "Projector – projecting"
                },
                {
                    "url": "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=800&q=80",
                    "alt": "Projector – device"
                }
            ],
            "stock": 30,
            "category": "Electronics",
            "created_at": "2024-02-01T00:00:00Z"
        },
        {
            "id": "33",
            "name": "Gaming Chair",
            "description": "Ergonomic gaming chair with lumbar support and adjustable armrests",
            "price": 249.99,
            "image_url": [
                {
                    "url": "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=800&q=80",
                    "alt": "Gaming Chair – full view"
                },
                {
                    "url": "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=800&q=80",
                    "alt": "Gaming Chair – side angle"
                }
            ],
            "stock": 25,
            "category": "Furniture",
            "created_at": "2024-02-02T00:00:00Z"
        },
        {
            "id": "34",
            "name": "Security Camera",
            "description": "Indoor WiFi security camera with night vision and motion alerts",
            "price": 89.99,
            "image_url": [
                {
                    "url": "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?w=800&q=80",
                    "alt": "Security Camera – mounted"
                },
                {
                    "url": "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
                    "alt": "Security Camera – angle view"
                }
            ],
            "stock": 80,
            "category": "Home",
            "created_at": "2024-02-03T00:00:00Z"
        },
        {
            "id": "35",
            "name": "Smartwatch Pro",
            "description": "Premium smartwatch with ECG, blood oxygen, and GPS tracking",
            "price": 449.99,
            "image_url": [
                {
                    "url": "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=800&q=80",
                    "alt": "Smartwatch Pro – on wrist"
                },
                {
                    "url": "https://images.unsplash.com/photo-1617043786394-f977fa12eddf?w=800&q=80",
                    "alt": "Smartwatch Pro – display"
                }
            ],
            "stock": 40,
            "category": "Electronics",
            "created_at": "2024-02-04T00:00:00Z"
        },
        {
            "id": "36",
            "name": "Drone",
            "description": "GPS drone with 4K camera and 30-minute flight time",
            "price": 499.99,
            "image_url": [
                {
                    "url": "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&q=80",
                    "alt": "Drone – flying"
                },
                {
                    "url": "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?w=800&q=80",
                    "alt": "Drone – on ground"
                }
            ],
            "stock": 20,
            "category": "Electronics",
            "created_at": "2024-02-05T00:00:00Z"
        },
    ]

// Static users data
export const users: User[] = [
    {
        id: 'admin-1',
        email: 'admin@example.com',
        role: 'admin',
        created_at: '2024-01-01T00:00:00Z'
    },
    {
        id: 'user-1',
        email: 'user@example.com',
        role: 'user',
        created_at: '2024-01-01T00:00:00Z'
    }
]

// Helper functions to simulate database operations
export function getProducts(filters?: {
    category?: string
    search?: string
    inStock?: boolean
}): Product[] {
    let filteredProducts = [...products]

    if (filters?.inStock) {
        filteredProducts = filteredProducts.filter(p => p.stock > 0)
    }

    if (filters?.category) {
        filteredProducts = filteredProducts.filter(p => p.category === filters.category)
    }

    if (filters?.search) {
        const searchLower = filters.search.toLowerCase()
        filteredProducts = filteredProducts.filter(p =>
            p.name.toLowerCase().includes(searchLower) ||
            p.description.toLowerCase().includes(searchLower)
        )
    }

    return filteredProducts.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
}

export function getProductById(id: string): Product | null {
    return products.find(p => p.id === id) || null
}

export function getCategories(): string[] {
    return [...new Set(products.map(p => p.category).filter(Boolean))]
}

export function getUserById(id: string): User | null {
    return users.find(u => u.id === id) || null
}

export function getUserByEmail(email: string): User | null {
    return users.find(u => u.email === email) || null
}
