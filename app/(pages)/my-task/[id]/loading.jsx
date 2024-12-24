import { LoadingOutlined } from '@ant-design/icons';

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="w-1/2 flex justify-center items-center h-96">
      <LoadingOutlined style={{ fontSize: "3rem" ,fill: "var(--color-primary)"}} />
    </div>
  )
}