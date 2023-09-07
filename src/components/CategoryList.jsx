import { imgs, categories } from '../data';
import CategoryCard from './CategoryCard';



const [
    imgCiencia,
	imgDeportes,
	imgFilosofia,
	imgGeografia,
	imgHistoria,
	imgLiteratura,
	imgTecnologia,
] = imgs;

const CategoryList = () => {
    return (
        <div className='flex flex-row flex-wrap justify-center gap-4 mt-10'>
            {/* Ciencia */}
            <CategoryCard category={categories.ciencia} src={imgCiencia} gradientcolor='from-purple-500 to-pink-500' alt={`Category ${categories.ciencia}`}/>

            {/* Deportes */}    
            <CategoryCard category={categories.deportes} src={imgDeportes} gradientcolor='from-green-500 to-blue-300' alt={`Category ${categories.deportes}`}/>

            {/* Filosofia */}            
            <CategoryCard category={categories.filosofia} src={imgFilosofia} gradientcolor='from-orange-400 to-zinc-200' alt={`Category ${categories.filosofia}`}/>

            {/* Geografia */}
            <CategoryCard category={categories.geografia} src={imgGeografia} gradientcolor='from-green-300 to-blue-500' alt={`Category ${categories.geografia}`}/>

            {/* Historia */}
            <CategoryCard category={categories.historia} src={imgHistoria} gradientcolor='from-cyan-200 to-pink-200' alt={`Category ${categories.historia}`}/>

            {/* Literatura */}
            <CategoryCard category={categories.literatura} src={imgLiteratura} gradientcolor='from-yellow-400 to-zinc-400' alt={`Category ${categories.literatura}`}/>
            
            {/* Tecnologia */}
            <CategoryCard category={categories.tecnologia} src={imgTecnologia} gradientcolor='from-lime-400 to-teal-200' alt={`Category ${categories.tecnologia}`}/>

        </div>
    )
}

export default CategoryList