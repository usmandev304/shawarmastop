'use client'

import { useState } from 'react';
import Hummus from '../../images/orderMainSection/Hummus.png'
import HummusWithShawarmaChicken from '../../images/orderMainSection/Hummuswith ShawarmChicken.png'
import FattoushSalad from '../../images/orderMainSection/FattoushSalad.png'
import FattoushChickenShawarmaFries from '../../images/orderMainSection/FattoushChickenShawarmaFries.png'
import Fries from '../../images/orderMainSection/Fries.png'
import MasalaFries from '../../images/orderMainSection/MasalaFries.png'
import ChipotleCheesyFries from '../../images/orderMainSection/ChipotleCheezyFries.png'
import LoadedShawarmaFries from '../../images/orderMainSection/LoadedShawarmaFries.png'
import Image from 'next/image';
import Falafel from '../../images/orderMainSection/Falafel(7 pieces).png'
import SectionHeader from '../home/components/sectionHeader';
import props from '../../images/home-mainSection/props.png'
import { Poppins } from 'next/font/google';
import CheeseFatayer from '../../images/orderMainSection/CheeseFatayer.png'
import JubanFatayer from '../../images/orderMainSection/JubanFatayer.png'
import ZaatarFatayer from '../../images/orderMainSection/ZaatarFatayer.png'
import ChickenFatayer from '../../images/orderMainSection/ChickenFatayer.png'
import PepperoniFatayer from '../../images/orderMainSection/PepperoniFatayer.png'
import ZaatarCheeseFatayer from '../../images/orderMainSection/ZaatarCheeseFatayer.png'
import HouseSpecialShawarma from '../../images/orderMainSection/HouseSpecialShawarma.png'
import FarroujMeshwi from '../../images/orderMainSection/FarroujMeshwi.png'
import ShishTawookWrap from '../../images/orderMainSection/ShishTawookWrap.png'
import KaftaKebabWrap from '../../images/orderMainSection/KaftaKebabWrap.png'
import OGCrispyShawarma from '../../images/orderMainSection/OGCrispyShawarma.png'
import FlafelWrap from '../../images/orderMainSection/FlafelWrap.png'
import ChickenShawarmaPlatter from '../../images/orderMainSection/ChickenShawarmaPlatter.png'
import LahoriShawarmaPlatter from '../../images/orderMainSection/LahoriShawarmaPlatter.png'
import ShishTawookPlatter from '../../images/orderMainSection/ShishTawookPlatter.png'
import KaftaKebabPlatter from '../../images/orderMainSection/KaftaKebabPlatter.png'
import ShawarmaArabi from '../../images/orderMainSection/ShawarmaArabi.png'
import MixGrillPlatter from '../../images/orderMainSection/MixGrillPlatter.png'
import ClassicKunafa from '../../images/orderMainSection/ClassicKunafa.png'
import NutellaKunafa from '../../images/orderMainSection/NutellaKunafa.png'
import NutellaFatayer from '../../images/orderMainSection/NutellaFatayer.png'
import JubanFatayerwithhoney from '../../images/orderMainSection/JubanFatayerwithhoney.png'
import Mangoicecream from '../../images/orderMainSection/Mangoice-cream.png'
import BelgianChocolateIcecream from '../../images/orderMainSection/BelgianChocolateIce-cream.png'
import VanillaBrownieIcecream from '../../images/orderMainSection/VanillaBrownieIce-cream.png'
import RegularWaterBottle from '../../images/orderMainSection/RegularWaterBottle.png'
import LargeWaterBottle from '../../images/orderMainSection/LargeWaterBottle.png'
import CannedSoftDrinks from '../../images/orderMainSection/CannedSoftDrinks.png'
import FreshLime from '../../images/orderMainSection/FreshLime.png'
import MintMargarita from '../../images/orderMainSection/MintMargarita.png'
import TurkishTea from '../../images/orderMainSection/TurkishTea.png'
import KadakChai from '../../images/orderMainSection/KadakChai.png'
import FreshSeasonalJuices from '../../images/orderMainSection/FreshSeasonalJuices.png'
import SaudiBroast from '../../images/orderMainSection/SaudiBroast.png'
import SaudiBroast2 from '../../images/orderMainSection/SaudiBroast2.png'
import SaudiBroast3 from '../../images/orderMainSection/SaudiBroast3.png'
import PeriPeriWings from '../../images/orderMainSection/PeriPeriWings.png'
import HoneWings from '../../images/orderMainSection/HoneWings.png'
import HoneWings1 from '../../images/orderMainSection/HoneWings1.png'
import Khoubz from '../../images/orderMainSection/Khoubz.png'
import MixPlatterfor3 from '../../images/orderMainSection/MixPlatterfor3.png'
import MixPlatterfor5 from '../../images/orderMainSection/MixPlatterfor5.png'
import ShawarmaArabi1 from '../../images/orderMainSection/ShawarmaArabi1.png'
import SajBread from '../../images/orderMainSection/SajBread.png'
import ChipotleSauce from '../../images/orderMainSection/ChipotleSauce.png'
import TahiniSauce from '../../images/orderMainSection/TahiniSauce.png'
import GarlicSauce from '../../images/orderMainSection/GarlicSauce.png'
import MintChiliSauce from '../../images/orderMainSection/MintChiliSauce.png'
import Yamamasauce from '../../images/orderMainSection/Yamamasauce.png'
import HomeLocation from '../home/homeLocation';
import { useCart } from '@/app/context/CartContext';


const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700']
});


// Menu items data
const menuItems = [
    {
        id: 1,
        category: 'Appetizers',
        name: 'Hummus',
        description: 'Velvety, protein-rich hummus crafted from simple, wholesome ingredients.',
        price: 495,
        image: Hummus,
        badge: 'Signle'
    },
    {
        id: 2,
        category: 'Appetizers',
        name: 'Hummus with Shawarma Chicken',
        description: 'Creamy hummus topped with tender, spiced shawarma chicken',
        price: 825,
        image: HummusWithShawarmaChicken,
        badge: 'Single'
    },
    {
        id: 3,
        category: 'Appetizers',
        name: 'Fattoush Salad',
        description: 'A fresh mix of crisp vegetables, toasted pita, and tangy lemon-sumac dressing.',
        price: 385,
        image: FattoushSalad,
        badge: 'Single'
    },
    {
        id: 4,
        category: 'Appetizers',
        name: 'Hummus',
        description: 'Velvety, protein-rich hummus crafted from simple, wholesome ingredients.',
        price: 825,
        image: Hummus,
        badge: 'Family'
    },
    {
        id: 5,
        category: 'Appetizers',
        name: 'Hummus with Shawarma Chicken',
        description: 'Creamy hummus topped with tender, spiced shawarma chicken',
        price: 1155,
        image: HummusWithShawarmaChicken,
        badge: 'Family'
    },
    {
        id: 6,
        category: 'Appetizers',
        name: 'Fattoush Salad',
        description: 'A fresh mix of crisp vegetables, toasted pita, and tangy lemon-sumac dressing.',
        price: 605,
        image: FattoushSalad,
        badge: 'Family'
    },
    {
        id: 7,
        category: 'Appetizers',
        name: 'Fattoush Chicken Shawarma Fries',
        description: 'A flavorful fusion of crispy fries, spiced chicken shawarma.',
        price: 605,
        image: FattoushChickenShawarmaFries,
        badge: 'Single'
    },
    {
        id: 8,
        category: 'Appetizers',
        name: 'Fattoush Chicken Shawarma Fries',
        description: 'A flavorful fusion of crispy fries, spiced chicken shawarma.',
        price: 825,
        image: FattoushSalad,
        badge: 'Family'
    },
    {
        id: 9,
        category: 'Appetizers',
        name: 'Fattoush Chicken Shawarma Fries',
        description: 'A flavorful fusion of crispy fries, spiced chicken shawarma.',
        price: 220,
        image: FattoushChickenShawarmaFries,
        badge: 'Regular'
    },
    {
        id: 10,
        category: 'Appetizers',
        name: 'Fattoush Chicken Shawarma Fries',
        description: 'A flavorful fusion of crispy fries, spiced chicken shawarma.',
        price: 242,
        image: FattoushChickenShawarmaFries,
        badge: 'Regular'
    },
    {
        id: 11,
        category: 'Appetizers',
        name: 'Fries',
        description: 'Crispy golden fries, perfectly seasoned and freshly cooked for a satisfying crunch.',
        price: 605,
        image: Fries,
        badge: 'Regular'
    },
    {
        id: 12,
        category: 'Appetizers',
        name: 'Masala Fries',
        description: 'Crispy golden fries dusted with a rich, aromatic masala blend and extra crunch.',
        price: 715,
        image: MasalaFries,
        badge: 'Family'
    },
    {
        id: 13,
        category: 'Appetizers',
        name: 'Chipotle Cheesy Fries',
        description: 'Crunchy fries loaded with creamy cheese and bold, smoky chipotle flavor.',
        price: 715,
        image: ChipotleCheesyFries,
        badge: 'Family'
    },
    {
        id: 14,
        category: 'Appetizers',
        name: 'Loaded Shawarma Fries',
        description: 'Loaded fries with tender shawarma chicken, cheese and Middle Eastern spices',
        price: 715,
        image: LoadedShawarmaFries,
        badge: 'Family'
    },
    {
        id: 15,
        category: 'Appetizers',
        name: 'Falafel (7 pieces)',
        description: 'Crispy, golden chickpea balls made with herbs and spices (7 pieces)',
        price: 825,
        image: Falafel,
        badge: 'Regular'
    },
    {
        id: 16,
        category: 'Fatayers',
        name: 'Cheese Fatayer',
        description: 'Baked pastry filled with a blend of soft cheeses, perfectly melted and creamy.',
        price: 715,
        image: CheeseFatayer,
        badge: 'Regular'
    },
    {
        id: 17,
        category: 'Fatayers',
        name: 'Juban Fatayer',
        description: 'Rich and flavorful cheese pastry, popular for its creaminess and smooth, melted filling.',
        price: 825,
        image: JubanFatayer,
        badge: 'Single'
    },
    {
        id: 18,
        category: 'Fatayers',
        name: 'Zaatar Fatayer',
        description: 'Flatbread pastry topped with a fragrant blend of zaatar spices, baked fresh for a crispy bite.',
        price: 605,
        image: ZaatarFatayer,
        badge: 'Single'
    },
    {
        id: 19,
        category: 'Fatayers',
        name: 'Chicken Fatayer',
        description: 'Pastry stuffed with spiced chicken filling, baked to golden perfection for a crispy, flavorful bite.',
        price: 825,
        image: ChickenFatayer,
        badge: 'Single'
    },
    {
        id: 20,
        category: 'Fatayers',
        name: 'Pepperoni Fatayer',
        description: 'Fatayer with a twist, stuffed with pepperoni and cheese, baked to golden perfection.',
        price: 825,
        image: PepperoniFatayer,
        badge: 'Single'
    },
    {
        id: 21,
        category: 'Fatayers',
        name: 'Zaatar Cheese Fatayer',
        description: 'Zaatar and melted cheese combined in a savory pastry, baked until perfectly golden.',
        price: 825,
        image: ZaatarCheeseFatayer,
        badge: 'Single'
    },
    {
        id: 22,
        category: 'Main Course',
        name: 'House Special Shawarma',
        description: 'Our signature chicken shawarma with garlic sauce and pickles in a wrap.',
        price: 528,
        image: HouseSpecialShawarma,
        badge: 'Regular'
    },
    {
        id: 23,
        category: 'Main Course',
        name: 'House Special Shawarma',
        description: 'Rich and flavorful cheese pastry, popular for its creaminess and smooth, melted filling.',
        price: 880,
        image: HouseSpecialShawarma,
        badge: 'Large'
    },
    {
        id: 24,
        category: 'Main Course',
        name: 'Farrouj Meshwi',
        description: 'Grilled whole chicken, marinated in Middle Eastern spices, served with garlic sauce and rice.',
        price: 1650,
        image: FarroujMeshwi,
        badge: 'Half'
    },
    {
        id: 25,
        category: 'Main Course',
        name: 'Farrouj Meshwi',
        description: 'Grilled whole chicken, marinated in Middle Eastern spices, served with garlic sauce and rice.',
        price: 2860,
        image: FarroujMeshwi,
        badge: 'Full'
    },
    {
        id: 26,
        category: 'Main Course',
        name: 'Shish Tawook Wrap',
        description: 'Marinated grilled chicken served in a wrap with garlic sauce and fresh veggies.',
        price: 880,
        image: ShishTawookWrap,
        badge: 'Regular'
    },
    {
        id: 27,
        category: 'Main Course',
        name: 'Kafta Kebab Wrap',
        description: 'Grilled kafta kebabs with hummus, onions, and parsley wrapped in flatbread.',
        price: 825,
        image: KaftaKebabWrap,
        badge: 'Regular'
    },
    {
        id: 28,
        category: 'Main Course',
        name: 'OG Crispy Shawarma',
        description: (
            <>
                Chicken shawarma with garlic sauce and crispy bread.
                <br />
                <b>Make it a meal (Rs 300)</b>
            </>
        ),
        price: 950,
        image: OGCrispyShawarma,
        badge: 'Regular'
    },
    {
        id: 29,
        category: 'Main Course',
        name: 'Falafel Wrap',
        description: (
            <>
                Falafel patties wrapped in flatbread with tahini sauce and veggies.
                <br />
                <b>Make it a meal (Rs 300)</b>
            </>
        ),
        price: 385,
        image: FlafelWrap,
        badge: 'Regular'
    },
    {
        id: 30,
        category: 'Main Course',
        name: 'Chicken Shawarma Platter',
        description: 'Shawarma chicken served with rice, garlic sauce, and pickles — fresh and flavorful.',
        price: 1265,
        image: ChickenShawarmaPlatter,
        badge: 'Regular'
    },
    {
        id: 31,
        category: 'Main Course',
        name: 'Lahori Shawarma Platter',
        description: 'Spicy Lahori-style shawarma served with pita bread and chutney.',
        price: 990,
        image: LahoriShawarmaPlatter,
        badge: 'Regular'
    },
    {
        id: 32,
        category: 'Main Course',
        name: 'Shish Tawook Platter',
        description: 'Grilled marinated chicken skewers, served with rice and garlic sauce.',
        price: 1650,
        image: ShishTawookPlatter,
        badge: 'Regular'
    },
    {
        id: 33,
        category: 'Main Course',
        name: 'Kafta Kebab Platter',
        description: 'Kafta kebab served with rice, garlic sauce, and grilled vegetables.',
        price: 1705,
        image: KaftaKebabPlatter,
        badge: 'Regular'
    },
    {
        id: 34,
        category: 'Main Course',
        name: 'Shawarma Arabi Platter',
        description: 'Shawarma rolled in flatbread, sliced and served with garlic sauce.',
        price: 1155,
        image: ShawarmaArabi,
        badge: 'Regular'
    },
    {
        id: 35,
        category: 'Main Course',
        name: 'Mix Grill Platter',
        description: 'Half Farouj Meshwi, 2 kafta kebabs, 7 pieces of shish tawook, rice, garlic sauce, pickles, and bread',
        price: 3080,
        image: MixGrillPlatter,
        badge: 'Regular'
    },
    {
        id: 36,
        category: 'Dessert',
        name: 'Classic Kunafa',
        description: 'Crispy golden kunafa with melted cheese, sweet syrup, and crushed pistachios.',
        price: 1430,
        image: ClassicKunafa,
        badge: null
    },
    {
        id: 37,
        category: 'Dessert',
        name: 'Nutella Kunafa',
        description: 'Crispy golden kunafa with rich Nutella, sweet syrup, and crushed pistachios.',
        price: 1430,
        image: NutellaKunafa,
    },
    {
        id: 38,
        category: 'Dessert',
        name: 'Nutella Fatayer',
        description: 'Soft baked fatayer stuffed with rich Nutella, lightly toasted for a warm and chocolatey delight.',
        price: 1045,
        image: NutellaFatayer,
    },
    {
        id: 39,
        category: 'Dessert',
        name: 'Juban Fatayer with Honey',
        description: 'Soft baked Juban fatayer filled with creamy cheese and drizzled with pure honey.',
        price: 880,
        image: JubanFatayerwithhoney,
    },
    {
        id: 40,
        category: 'Dessert',
        name: 'Mango Ice Cream',
        description: 'Soft baked Juban fatayer filled with creamy cheese and drizzled with pure honey.',
        price: 880,
        image: Mangoicecream,
    },
    {
        id: 41,
        category: 'Dessert',
        name: 'Belgian Chocolate Ice Cream',
        description: 'Crispy golden kunafa with melted cheese, sweet syrup, and crushed pistachios.',
        price: 305,
        image: BelgianChocolateIcecream,
    },
    {
        id: 42,
        category: 'Dessert',
        name: 'Vanilla Brownie Ice Cream',
        description: 'Crispy golden kunafa with melted cheese, sweet syrup, and crushed pistachios.',
        price: 305,
        image: VanillaBrownieIcecream,
    },
    {
        id: 43,
        category: 'Drink',
        name: 'Regular Water Bottle',
        description: 'Pure and refreshing regular water bottle, served chilled for your comfort.',
        price: 120,
        image: RegularWaterBottle,
        badge: 'Regular'
    },
    {
        id: 44,
        category: 'Drink',
        name: 'Large Water Bottle',
        description: 'Pure and refreshing Large water bottle, served chilled for your comfort.',
        price: 200,
        image: LargeWaterBottle,
        badge: 'Regular'
    },
    {
        id: 45,
        category: 'Drink',
        name: 'Canned Soft Drinks',
        description: 'Chilled canned soft drinks, served fresh and fizzy for a refreshing boost.',
        price: 150,
        image: CannedSoftDrinks,
        badge: 'Half'
    },
    {
        id: 46,
        category: 'Drink',
        name: 'Fresh Lime',
        description: 'Freshly squeezed lime drink, cool and refreshing with a zesty citrus twist.',
        price: 200,
        image: FreshLime,
        badge: 'Full'
    },
    {
        id: 47,
        category: 'Drink',
        name: 'Mint Margarita',
        description: 'Refreshing mint margarita blended with fresh mint and lemon for a cool, zesty taste.',
        price: 250,
        image: MintMargarita,
        badge: 'Regular'
    },
    {
        id: 48,
        category: 'Drink',
        name: 'Turkish Tea',
        description: 'Authentic Turkish tea, freshly brewed and served hot with rich aroma and bold flavor.',
        price: 250,
        image: TurkishTea,
        badge: 'Regular'
    },
    {
        id: 49,
        category: 'Drink',
        name: 'Kadak Chai',
        description: 'Strong and flavorful Kadak Chai, freshly brewed for a bold and comforting taste.',
        price: 250,
        image: KadakChai,
        badge: 'Regular'
    },
    {
        id: 50,
        category: 'Drink',
        name: 'Fresh Seasonal Juices',
        description: 'Fresh seasonal juices made from ripe fruits, naturally sweet and refreshing.',
        price: 450,
        image: FreshSeasonalJuices,
        badge: 'Regular'
    },
    {
        id: 51,
        category: 'Others',
        name: 'Saudi Broast',
        description: 'Tender, juicy chicken marinated in traditional Saudi spices, pressure-fried to a golden crisp.',
        price: 737,
        image: SaudiBroast,
        badge: 'Quarter'
    },
    {
        id: 52,
        category: 'Others',
        name: 'Saudi Broast',
        description: 'Tender, juicy chicken marinated in traditional Saudi spices, pressure-fried to a golden crisp.',
        price: 1430,
        image: SaudiBroast2,
        badge: 'Half'
    },
    {
        id: 53,
        category: 'Others',
        name: 'Saudi Broast',
        description: 'Tender, juicy chicken marinated in traditional Saudi spices, pressure-fried to a golden crisp.',
        price: 2530,
        image: SaudiBroast3,
        badge: 'Full'
    },
    {
        id: 54,
        category: 'Others',
        name: 'Peri Peri Wings',
        description: 'Juicy chicken wings marinated in authentic peri peri spices, grilled to a smoky.',
        price: 473,
        image: PeriPeriWings,
        badge: '6 pcs'
    },
    {
        id: 55,
        category: 'Others',
        name: 'Peri Peri Wings',
        description: 'Juicy chicken wings marinated in authentic peri peri spices, grilled to a smoky.',
        price: 836,
        image: PeriPeriWings,
        badge: '12 pcs'
    },
    {
        id: 56,
        category: 'Others',
        name: 'Hone Wings',
        description: 'Crispy golden wings coated in a rich honey glaze sweet, sticky, and perfectly caramelised.',
        price: 473,
        image: HoneWings,
        badge: '6 pcs'
    },
    {
        id: 57,
        category: 'Others',
        name: 'Hone Wings',
        description: 'Crispy golden wings coated in a rich honey glaze sweet, sticky, and perfectly caramelised.',
        price: 836,
        image: HoneWings1,
        badge: '6 pcs'
    },
    {
        id: 58,
        category: 'Others',
        name: 'Khoubz',
        description: 'Soft, pillowy Arabic flatbread baked fresh daily — the perfect companion to every meal.',
        price: 80,
        image: Khoubz,
        badge: 'Regular'
    },
    {
        id: 59,
        category: 'Others',
        name: 'Mix Platter for 3',
        description: '2 Regular Chicken Shawarmas, fries, 10 cubes of Shish Tawook, Half Farouj Meshwi, 3 Kebabs...',
        price: 4180,
        image: MixPlatterfor3,
        badge: 'Family Deal'
    },
    {
        id: 60,
        category: 'Others',
        name: 'Shish Tawook Platter',
        description: 'Grilled marinated chicken skewers, served with rice and garlic sauce.',
        price: 1650,
        image: ShishTawookPlatter,
        badge: 'Family Deal'
    },
    {
        id: 61,
        category: 'Others',
        name: 'Mix Platter for 5',
        description: '3 Chicken Shawarmas, fries, 14 cubes of Shish Tawook, Full Farouj Meshwi, 4 Kafta Kebabs, rice..',
        price: 8030,
        image: MixPlatterfor5,
        badge: 'Family Deal'
    },
    {
        id: 62,
        category: 'Others',
        name: 'Shawarma Arabi Platter',
        description: 'Shawarma rolled in flatbread, sliced and served with garlic sauce.',
        price: 1155,
        image: ShawarmaArabi1,
        badge: 'Family Deal'
    },
    {
        id: 63,
        category: 'Others',
        name: 'Saj Bread',
        description: 'Thin, soft flatbread cooked fresh on a traditional domed saj light, flexible, and warmly charred.',
        price: 80,
        image: SajBread,
        badge: '12 pcs'
    },
    {
        id: 64,
        category: 'Others',
        name: 'Chipotle Sauce',
        description: 'Authentic Turkish tea, freshly brewed and served hot with rich aroma and bold flavor.',
        price: 90,
        image: ChipotleSauce,
        badge: '6 pcs'
    },
    {
        id: 65,
        category: 'Others',
        name: 'Hot Sauce',
        description: 'Strong and flavorful Kadak Chai, freshly brewed for a bold and comforting taste.',
        price: 60,
        image: HoneWings1,
        badge: '12 pcs'
    },
    {
        id: 66,
        category: 'Others',
        name: 'Tahini Sauce',
        description: 'Fresh seasonal juices made from ripe fruits, naturally sweet and refreshing.',
        price: 90,
        image: TahiniSauce,
        badge: 'Regular'
    },
    {
        id: 67,
        category: 'Others',
        name: 'Garlic Sauce',
        description: 'Fresh seasonal juices made from ripe fruits, naturally sweet and refreshing.',
        price: 90,
        image: GarlicSauce,
        badge: '12 pcs'
    },
    {
        id: 68,
        category: 'Others',
        name: 'Mint Chili Sauce',
        description: 'Authentic Turkish tea, freshly brewed and served hot with rich aroma and bold flavor.',
        price: 60,
        image: MintChiliSauce,
        badge: '6 pcs'
    },
    {
        id: 69,
        category: 'Others',
        name: 'House Special Hot Sauce',
        description: 'Strong and flavorful Kadak Chai, freshly brewed for a bold and comforting taste.',
        price: 90,
        image: HoneWings1,
        badge: '12 pcs'
    },
    {
        id: 70,
        category: 'Others',
        name: 'House Special Rice',
        description: 'Fresh seasonal juices made from ripe fruits, naturally sweet and refreshing.',
        price: 240,
        image: TahiniSauce,
        badge: 'Regular'
    },
    {
        id: 71,
        category: 'Others',
        name: 'Yamama Sauce',
        description: 'Freshly squeezed lime drink, cool and refreshing with a zesty citrus twist.',
        price: 150,
        image: Yamamasauce,
        badge: '12 pcs'
    },
];

// Categories
const categories = ['Appetizers', 'Fatayers', 'Main Course', 'Dessert', 'Drink', 'Others'];

export default function OrderMainSection() {
    const [selectedCategory, setSelectedCategory] = useState('Appetizers');
    const { addItem } = useCart();

    const filteredItems = menuItems.filter(item => item.category === selectedCategory);

    return (
        <>
            <section className={`bg-white min-h-screen p-8`}>
                <div className="max-w-[1360px] mx-auto">
                    {/* Header Section */}
                    <SectionHeader
                        badgeImage={props}
                        badgeAlt="Explore Our Menu"
                        title="Explore Our Menu"
                        description="Enjoy freshly made meals crafted with quality ingredients and great taste."
                    />

                    {/* Category Filter */}
                    <div className={`${poppins.className} bg-[#f4f2ed] content-stretch flex gap-[12px] items-center md:flex-wrap p-[8px] rounded-[100px] mb-12 md:mt-[40px] w-fit mx-auto`}>
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`content-stretch flex h-[48px] items-center justify-center md:text-[14px] font-[400] px-[16px] py-[10px] rounded-[100px] shrink-0 w-[130px] transition-colors ${selectedCategory === category
                                    ? 'bg-[#f95233]'
                                    : 'bg-transparent hover:bg-[#f4e8e2]'
                                    }`}
                            >
                                <p className={`font-['Poppins:${selectedCategory === category ? 'SemiBold' : 'Medium'}',sans-serif] leading-[normal] not-italic text-[14px] text-center whitespace-nowrap ${selectedCategory === category ? 'text-white' : 'text-black'
                                    }`}>
                                    {category}
                                </p>
                            </button>
                        ))}
                    </div>

                    {/* Menu Items Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-[18px] mb-12">
                        {filteredItems.map((item) => (
                            <div
                                key={item.id}
                                className="bg-[#f4f2ed] md:pt-[25px] md:pb-[30px] content-stretch flex flex-col h-[432px] items-center p-[2px] rounded-[16px] shrink-0"
                            >
                                {/* Image with Badge */}
                                <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 mb-6">
                                    <div className="col-1 h-[213.8px] ml-0 mt-0 relative row-1 w-[260px] ">
                                        <Image
                                            alt={item.name}
                                            className="absolute inset-0 max-w-none object-contain pointer-events-none size-full"
                                            src={item.image}
                                        />
                                    </div>
                                    <div className={`bg-[#ffae29] col-1 content-stretch flex items-start justify-end ml-[190.65px] mt-0 px-[14.118px] py-[7.059px] relative rounded-[88.235px] row-1 ${item.badge ? "visible" : "invisible"}`}>
                                        <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic text-[10.588px] text-white whitespace-nowrap">
                                            {item.badge}
                                        </p>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="content-stretch flex flex-col gap-[16px] items-start pt-[5.571px] relative shrink-0 w-[260px]">
                                    <div className="content-stretch flex flex-col gap-[7.543px] items-start not-italic relative shrink-0 text-black w-full">
                                        <p className={`${poppins.className} leading-[normal] font-[700] text-[18px] w-full`}>
                                            {item.name}
                                        </p>
                                        <p className={`${poppins.className} leading-[19.8px] font-[400] text-[15px] w-full`}>
                                            {item.description}
                                        </p>
                                    </div>

                                    {/* Add to Cart and Price */}
                                    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                                        <button
                                            onClick={() => addItem(item)}
                                            className={`${poppins.className} bg-[#f95233] content-stretch flex items-center justify-center px-[16px] py-[9px] rounded-[30px] shrink-0 w-[130px] hover:bg-[#e04020] transition-colors`}
                                        >
                                            <p className={`${poppins.className} leading-[normal] not-italic text-[14px] text-center text-white whitespace-nowrap`}>
                                                Add To Cart
                                            </p>
                                        </button>
                                        <p className={`${poppins.className} font-[600] leading-[normal] not-italic text-[18.857px] text-black whitespace-nowrap`}>
                                            Rs {item.price}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* View All Menu Button */}
                    <div className="flex justify-center md:pb-[50px]">
                        <button className="border-2 border-[#f95233] content-stretch flex items-center justify-center px-[138px] py-[19px] rounded-[100px] hover:bg-[#f95233] hover:text-white transition-colors group">
                            <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic text-[14px]  text-[#f95233] group-hover:text-white whitespace-nowrap">
                                View All menu
                            </p>
                        </button>
                    </div>
                </div>
            </section>
            <HomeLocation />
        </>
    );
}
