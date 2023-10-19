import Image from 'next/image'
import getCategoryColor from "@/helpers/get-category-color";
import styles from './style.module.sass'

const BlogDetails = () => (
    <div className="container pb-80"> 
        <div className="row mb-50">
            <div className="col col_9">
                <div className={`h6 mb-20 c-${getCategoryColor('Product Reviews')}`}>{'Product Reviews'}</div>
                <h2 className="mb-50">Lorem Ipsum sit amet</h2>
            </div>
        </div>
        <Image className={`${styles.featuredImage} mb-50`} src="/featured-image-1.jpg" alt="Featured Image" width="1280" height="387" />
    </div>
);


export default BlogDetails;