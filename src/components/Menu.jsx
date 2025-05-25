import Swal from 'sweetalert2';
import recipes from '../data/recipes';

export const Menu = () => {
    const handleOrder = (id) => {
        console.log(id, 'id is cliecked');
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, order it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Ordered!",
                    text: "Your order has been processing.",
                    icon: "success"
                });
            }
        });
    }

    return (
        <div className='menu-container'>
            <div className='menu-header' data-aos='fade-up'>
                <h2>This weeks specials!</h2>
                <button>Order Menu</button>
            </div>
            {/* menu cards */}
            <div className='cards'>
                {
                    recipes.map(recipe => <div key={recipe.id} className='menu-items' data-aos='fade-up'>
                        <img src={recipe.image} alt={recipe.title} />
                        <div className='menu-content'>
                            <div className='heading'>
                                <h5>{recipe.title}</h5>
                                <p>{recipe.price}</p>
                            </div>
                            <p>{recipe.description}</p>
                            <button className='orderBtn' onClick={() => handleOrder(recipe.id)}>Order Now</button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}
