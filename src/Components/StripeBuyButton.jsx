const StripeBuyButton = ({ buyButtonId }) => {
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: `<stripe-buy-button
              buy-button-id="${buyButtonId}"
              publishable-key="pk_live_51QotG5Dfn64ZgLlpihdZ9ItpLQ9GAjNyPHqbVP6DkaUegP7PyKdFHl89Oqhc9lsNIVEtp6zE0Y6dzukqPe1sBJOq007VdtVSMd">
            </stripe-buy-button>`,
        }}
      />
    );
  };
  
  export default StripeBuyButton;
  