export function LayoutDashboard ({ width, height, classname }) {
  return (
    <svg
      width={width ?? '24'}
      height={height ?? '24'}
      className={classname ?? ''}
      viewBox='0 0 24 24'
      strokeWidth='1.5'
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M4 4h6v8h-6z' />
      <path d='M4 16h6v4h-6z' />
      <path d='M14 12h6v8h-6z' />
      <path d='M14 4h6v4h-6z' />
    </svg>
  )
}

export function ChevronRight ({ width, height, classname }) {
  return (
    <svg
      width={width ?? '24'}
      height={height ?? '24'}
      className={classname ?? ''}
      viewBox='0 0 24 24'
      strokeWidth='1.5'
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <path stroke='none' d='M0 0h24v24H0z' fill='none'/>
      <path d='M9 6l6 6l-6 6' />
    </svg>
  )
}
