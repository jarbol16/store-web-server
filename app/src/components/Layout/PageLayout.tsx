import React, { FC } from "react";

interface Props {
  children: JSX.Element,
  breadcrumb: string
}

const PageLayout: FC<Props> = ({ children, breadcrumb }) => {
  return (
    <div>
      <div className="breadcrumb">
        {breadcrumb}
      </div>
      <div className="mainBody">
        {children}
      </div>
    </div>
  )
}

export default PageLayout;