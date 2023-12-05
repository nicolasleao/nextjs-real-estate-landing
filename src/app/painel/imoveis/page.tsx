"use client";

import React from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Menus from "../Menus";
import NoData from "@/app/_components/crud/NoData";
import DynamicTable from "@/app/_components/crud/DynamicTable";
import DropdownFilter from "@/app/_components/crud/DropdownFilter";


const getTableRows = (empty: boolean) => empty ? [] : [
  { name: 'test', address: 'test', state: 'test' }
];

function ActionButton() {
  return (
    <button
      type="button"
      className="text-sm text-white font-semibold rounded-lg border bg-gray-400 py-2 px-4"
    >
      <i className="las la-edit" />&ensp;Editar
    </button>
  )
}

function EmptyFallback() {
  return (
    <NoData
      heading="Oops, parece que você ainda não cadastrou nenhum imóvel!"
      subheading="Não se preocupe, clique no botão abaixo e siga o passo a passo para cadastrar seu primeiro imóvel."
      cta={{
        label: "Cadastrar Imóvel",
        href: '/painel/imoveis/cadastrar-imovel'
      }}
    />
  )
}

export default function Imoveis() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const rows = getTableRows(true);

  const tableHeaders = [
    { label: 'Nome', key: 'name' },
    { label: 'Endereço', key: 'address' },
    { label: 'Estado', key: 'state' },
  ]

  const filterItems = [
    { label: 'Aluguel', value: 'aluguel' },
    { label: 'Venda', value: 'venda' },
    { label: 'Todos', value: null },
  ]

  const onFilter = (value: string | null) => {
    if (!value)
      return router.push('/painel/imoveis');
    return router.push(`/painel/imoveis?type=${value}`);
  }

  return (
    <Menus>
      <h1 className="text-xl pb-6">Imoveis</h1>
      {!!rows.length && <DropdownFilter placeholder="Filtrar" items={filterItems} onFilter={onFilter} initialValue={type} />}
      <DynamicTable
        headers={tableHeaders}
        rows={rows}
        action={<ActionButton />}
        emptyFallback={<EmptyFallback />}
      />
    </Menus>
  );
}