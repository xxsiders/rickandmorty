import React, { useEffect } from 'react'
import CharactersProvider from '../../providers/CharactersProvider'

const HomeHoc = (Com: React.ComponentType<any>) => {
  const wrapper = (props: any) => {
    const { fetchCharacters, loading, data } = CharactersProvider()

    useEffect(() => {
      fetchCharacters()
    }, [])

    return <Com
      {...props}
      data={data}
      loading={loading}
    />
  }
  return wrapper
}

export default HomeHoc
