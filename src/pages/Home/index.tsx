import { useEffect, useState } from 'react'

import Banner from '../../components/Header/Banner'
import ProductsList from '../../components/ProductsList'

import resident from '../../../src/assets/images/resident.png'
import diablo from '../../../src/assets/images/diablo.png'
import zelda from '../../../src/assets/images/zelda.png'
import starWars from '../../../src/assets/images/star_wars.png'
import { StringSupportOption } from 'prettier'

import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

export interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

export type Game = {
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: String[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}

const Home = () => {
  const { data: onSaleGames } = useGetOnSaleQuery()
  const { data: soonGames } = useGetSoonQuery()

  if (onSaleGames && soonGames) {
    return (
      <>
        <Banner />
        <ProductsList games={onSaleGames} title="Promoções" background="gray" />
        <ProductsList games={soonGames} title="Em Breve" background="black" />
      </>
    )
  }
  return <h4>carregando</h4>
}

export default Home
