const StripeBuyButton = ({ buyButtonId }) => {
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: `<stripe-buy-button
              buy-button-id="${buyButtonId}"
              publishable-key="${import.meta.env.VITE_STRIPE_PUBLIC_KEY}">
            </stripe-buy-button>`,
        }}
      />
    );
  };
  
  export default StripeBuyButton;
  