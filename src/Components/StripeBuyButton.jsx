const StripeBuyButton = ({ buyButtonId }) => {
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: `<stripe-buy-button
              buy-button-id="${buyButtonId}"
              publishable-key=${process.env.stripek}>
            </stripe-buy-button>`,
        }}
      />
    );
  };
  
  export default StripeBuyButton;
  