import Image from 'next/image'
import styles from './saleCard.module.css'
import  Button from '@/components/forms/button/button'

export default function SaleCard({ image, discount, fullPrice, discountPrice }) {
    return (
        <div className={styles.saleCard}>
            <Image src={`/products/${image}`} alt={`Produto ${image}`} width={250} height={300} />
            <div className={styles.info}>
                <h3 className={styles.tittle}>Oferta Exclusiva</h3>
                <div className={styles.priceCard}>
                    <div className={styles.percent}>-{discount}</div>
                    <div className={styles.price}>
                        <p className={styles.fullPrice}>R${fullPrice}</p>
                        <h4 className={styles.promoPrice}>R${discountPrice}</h4>
                    </div>
                </div>
                <Button fullWidth>Adicionar ao carrinho</Button>
            </div>
        </div>
    )
}

SaleCard.defaultProps = {
    image: 'league-of-legends.jpg',
    discount: '90%',
    fullPrice: '199,90',
    discountPrice: '57,90',
}