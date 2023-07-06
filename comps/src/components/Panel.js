import classNames from 'classnames';

function Panel({ children, className, ...rest }) {
  // for not writing duplicate classNames in div's everywhere, I include them here
  const finalClassNames = classNames(
    'border rounded p-3 shadow bg-white w-full',
    className
  ); // 'className' - 2nd Argument, it's going to merge any className that was provided to the Panel by the Parent component (can be multiple Classnames, but it's all inside 1 String)

  // This is goin to get a className of my MERGED classNames - 'finalClassNames'
  // and assign it to whatever 'children' were passed in, and whatever additional Props were provided as well
  return (
    <div {...rest} className={finalClassNames}>
      {children}
    </div>
  );
}

export default Panel;
