import Tag from '../Header/Tag'

import { Card, Descricao, Titulo } from './styles'

const Product = () => (
  <Card>
    <img src="//placehold.it/222x250" alt="Imagem Jogo" />
    <Titulo>Nome do Jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non cum illo,
      quaerat delectus vel temporibus? Sed officia sequi quod ipsa aliquid nam
      voluptatem ex minima ad quia, incidunt soluta minus?
    </Descricao>
  </Card>
)

export default Product
