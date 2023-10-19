import Card from '@/components/Card/Card';
import { IconType } from '@/components/Button/Button'

const Home = () => (
    <div className='container pb-80'>
      <Card 
        label="Product Reviews"
        title="Lorem Ipsum sit amet"
        summary="Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
        Etiam molestie convallis elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
        Cras ac elit mi."
        href="#"
        btnIcon={IconType.ARROW_RIGHT}
        className="mb-30"
      />
      <div className='row'>
        <div className='col col_4 m-mw-100'>
          <Card 
            label="Opinions"
            title="Lorem Ipsum sit amet"
            summary="Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
            Etiam molestie convallis elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
            Cras ac elit mi."
            href="#"
            btnIcon={IconType.ARROW_RIGHT}
            className="mb-30"
          />
        </div>
        <div className='col col_4 m-mw-100'>
          <Card 
              label="Product Reviews"
              title="Lorem Ipsum sit amet"
              summary="Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
              Etiam molestie convallis elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
              Cras ac elit mi."
              href="#"
              btnIcon={IconType.ARROW_RIGHT}
              className="mb-30"
          />
        </div>
        <div className='col col_4 m-mw-100'>
          <Card 
            label="Travel Guides"
            title="Lorem Ipsum sit amet"
            summary="Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
            Etiam molestie convallis elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
            Cras ac elit mi."
            href="#"
            btnIcon={IconType.ARROW_RIGHT}
            className="mb-30"
          />
        </div>
      </div>
    </div>
  );

export default Home; 