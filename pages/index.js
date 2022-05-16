import {Container} from '../components/styles/Container.styled'
import Layout from '../components/common/Layout'
import Searchbar from '../components/Searchbar/Typeahead'

export default function Home({albums}) {
  return (
      <Layout>
        <Container>
          <Searchbar albums={albums} />
        </Container>
      </Layout>
    
  )
}


export const getServerSideProps = async () => {
  const results = await fetch('http://localhost:3000/api/albums')
  const albums = await results.json();
 
  return {
      props: {
        albums: albums
      }
  }
}