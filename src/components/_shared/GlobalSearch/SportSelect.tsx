'use client'
import React from 'react'
import { Layers } from 'lucide-react'

import FormSelectSearch from '@/components/Common/Form/base/FormSelectSearch'
import { getSportCategoryApi } from '@/config/api/sport'
import { useFetch } from '@/hooks/api-hooks'
import { ISportCategory } from '@/interface/business'

const SportSelect = (props: any) => {
  const { register } = props

  const { data, isLoading } = useFetch<ISportCategory[]>(getSportCategoryApi())

  if (isLoading) return null

  const sportCategories =
    data?.map((sport) => {
      return { label: sport.name, value: sport.id }
    }) || []

  return (
    <FormSelectSearch
      options={sportCategories}
      key={'sport'}
      icon={<Layers size={18} />}
      placeholder='Môn thể thao'
      register={register}
      name={'sport'}
    />
  )
}

export default SportSelect
