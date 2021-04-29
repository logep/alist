import React, { forwardRef } from 'react'
import { PaginationProvider } from '@alist/react'
import { Pagination as AntdPagination } from 'antd'
import { PaginationProps } from 'antd/lib/pagination/Pagination'
import { createVirtualBox } from '@formily/antd'
import styled from 'styled-components'

const InternalPagination = styled(forwardRef((props: PaginationProps & { align: 'string' }, ref) => {
	return <PaginationProvider>
		{(connectProps) => {
			const { currentPage, setCurrentPage, setPageSize, pageSize, ...other } = connectProps;
			console.log('==connectProps', connectProps)
			return <AntdPagination pageSize={pageSize} ref={ref} current={currentPage} onChange={setCurrentPage} onShowSizeChange={(current, pageSize) => {
				console.log('==setPageSize', pageSize)
				setPageSize(pageSize);
			}} onPageSizeChange={setPageSize} {...other} {...props} />
		}}
	</PaginationProvider>
}))`
	margin: 16px 0;
	text-align: ${props => (props.align || 'right')};
`

const Pagination = createVirtualBox<PaginationProps>('alist-pagination', InternalPagination)

export {
	Pagination,
	InternalPagination,
}