import { Image } from 'react-native';
import { FeedItem } from 'react-native-rss-parser';
import { ListCard } from './';
import { render, screen, fireEvent } from '@testing-library/react-native';
import { ReactTestRendererJSON } from 'react-test-renderer';

const article: FeedItem = {
    "authors":  [],
    "categories":  [],
    "content": undefined,
    "description": "Mientras la NASA se prepara para enviar astronautas a la Luna con el programa Artemis, la agencia ha identificado 13 regiones candidatas para aterrizar cerca del polo sur lunar.",
    "enclosures":  [
       {
        "length": "2823757",
        "mimeType": "image/jpeg",
        "url": "http://www.nasa.gov/sites/default/files/styles/1x1_cardfeed/public/thumbnails/image/spanish_artemis_iii_landing_regions_0.jpg?itok=2x7U_6iZ",
      },
    ],
    "id": "http://www.nasa.gov/press-release/la-nasa-identifica-regiones-candidatas-para-un-alunizaje-humano",
    "itunes":  {
      "authors":  [],
      "block": undefined,
      "duration": undefined,
      "explicit": undefined,
      "image": undefined,
      "isClosedCaptioned": undefined,
      "order": undefined,
      "subtitle": undefined,
      "summary": undefined,
    },
    "links":  [
       {
        "rel": "",
        "url": "http://www.nasa.gov/press-release/la-nasa-identifica-regiones-candidatas-para-un-alunizaje-humano",
      },
    ],
    "published": "Fri, 19 Aug 2022 11:39 EDT",
    "title": "La NASA identifica regiones candidatas para un alunizaje humano La NASA identifica regiones candidatas para un alunizaje humano La NASA identifica regiones candidatas para un alunizaje humano La NASA identifica regiones candidatas para un alunizaje humano La NASA identifica regiones candidatas para un alunizaje humano La NASA identifica regiones candidatas para un alunizaje humano",
  };
  
describe('<ListCard />', () => {
  it('Image uri is the first found enclosure', () => {
    const tree = render(<ListCard article={article} onPress={()=>{}}/>).toJSON() as ReactTestRendererJSON;
    const image = tree.children[0] as ReactTestRendererJSON;
    expect(image.props.source.uri).toBe(article.enclosures[0].url);
  });
  it('Image uri is default image if none is found', () => {
    const withoutImage = { ...article, enclosures: []}
    const tree = render(<ListCard article={withoutImage} onPress={()=>{}}/>).toJSON() as ReactTestRendererJSON;
    const image = tree.children[0] as ReactTestRendererJSON;
    expect(image.props.source).toBe(1);  // The return statement for the require('imageFilepath') is 1.
  });
  it('Calls onPress when pressed', () => {
    const onPress = jest.fn();
    const tree = render(<ListCard article={article} onPress={onPress}/>);
    fireEvent.press(tree.container);
    expect(onPress).toBeCalledTimes(1); 
  });
  it('Limits title and description to 2 lines.', () => {
    const { getByText } = render(<ListCard article={article} onPress={() => {}}/>);
    const title = getByText('La NASA identifica regiones candidatas ', {
      exact: false
    });
    const description = getByText('Mientras la NASA se prepara para enviar astronautas a la Luna con el programa Artemis, la agencia', {
      exact: false
    });
    expect(title.props.numberOfLines).toBe(2);
    expect(description.props.numberOfLines).toBe(2);
  });
});