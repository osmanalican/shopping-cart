import storeItems from '../data/items.json'

export function Store() {
    return (
        <div>
            {storeItems.map(item => (
                    <div>
                        <h1>{item.name}</h1>
                        <p>{item.price}</p>
                    </div>
                )
            )}
        </div>
    )
}