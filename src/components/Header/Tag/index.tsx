import { TagContainer } from './styles'
export type Props = {
  size?: 'small' | 'big'
  children: string
}

const Tag = ({ children, size = 'small' }: Props) => (
  <TagContainer size={size}>Destaque do dia</TagContainer>
)

export default Tag
