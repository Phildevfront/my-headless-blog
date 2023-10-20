import Card from '@/components/Card/Card';
import { IconType } from '@/components/Button/Button'
import config from '@/config'
import fetchBlogs from '@/helpers/fetch-blogs'


const Home = async () => { 
  const [featuredBlogs, blogs] = await Promise.all([
    await fetchBlogs('filters[IsFeatured][$eq]=true'),//'&filters[IsFeatured][$eq]=true' parameter passed to fetch function
    await fetchBlogs('filters[IsFeatured][$eq]=false')
  ]);

  console.log('featuredBlogs.data', featuredBlogs.data);

  return (
    <div className='container pb-80'>
      {featuredBlogs.data.map(featuredBlog => (
      <Card 
        key={featuredBlog.attributes.id}
        label={featuredBlog.attributes.Category}
        title={featuredBlog.attributes.Title}
        summary={featuredBlog.attributes.Summary}
        href={`/${featuredBlog.attributes.slug}`}
        imgSrc={`${config.api}${featuredBlog.attributes.FeaturedImage.data.attributes.url}`}
        imgAlt="Featured Image"
        btnIcon={IconType.ARROW_RIGHT}
        className="mb-30"
      />
      ))}

      <div className='row'>
        {blogs.data.map(blog => (
          <div className='col col_4 m-mw-100' key={blog.attributes.id}>
            <Card 
              label={blog.attributes.Category}
              title={blog.attributes.Title}
              summary={blog.attributes.Summary}
              href={`/${blog.attributes.slug}`}
              imgSrc={`${config.api}${blog.attributes.Thumbnail.data.attributes.url}`}
              imgAlt="Thumbnail"
              btnIcon={IconType.ARROW_RIGHT}
              className="mb-30"
            />
          </div>
        ))}
      </div>
    </div>
  )
  };

export default Home; 