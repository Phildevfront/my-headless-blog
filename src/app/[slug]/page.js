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

        <div className="row">
            <div className="col col_9">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Posuere ac ut consequat semper. Ut morbi tincidunt augue interdum velit. 
                    Vel facilisis volutpat est velit egestas dui id ornare.
                    Id donec ultrices tincidunt arcu non sodales neque sodales ut. 
                    Quis imperdiet massa tincidunt nunc pulvinar sapien.
                </p>
                <p>
                    Id donec ultrices tincidunt arcu non sodales neque sodales ut. Quis imperdiet massa 
                    tincidunt nunc pulvinar sapien. Non blandit massa enim nec dui nunc. Nulla facilisi 
                    morbi tempus iaculis urna id volutpat. 
                </p>
                <p>
                    Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus. 
                    In arcu cursus euismod quis viverra. 
                    Viverra suspendisse potenti nullam ac tortor vitae purus faucibus. 
                 </p>
            </div>
        </div>
    </div>

);

export default BlogDetails;