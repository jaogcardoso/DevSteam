import Image from 'next/image'
import styles from './saleCard.module.css'
import  Button from '@/components/forms/button/button'

export default function SaleCard() {
    return (
        <div className={styles.saleCard}>
            <Image src='/products/league-of-legends.jpg' width={250} height={300} />
            <div className={styles.info}>
                <h3 className={styles.tittle}>Oferta Exclusiva</h3>
                <div className={styles.priceCard}>
                    <div className={styles.percent}>-20%</div>
                    <div className={styles.price}>
                        <p className={styles.fullPrice}>R$99,90</p>
                        <h4 className={styles.promoPrice}>R$79,90</h4>
                    </div>
                </div>
                <Button>Adicionar ao carrinho</Button>
            </div>
        </div>
    )
}