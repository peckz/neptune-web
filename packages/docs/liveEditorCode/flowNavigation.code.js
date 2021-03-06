<FlowNavigation
  activeStep={0}
  onClose={() => alert('Close clicked')}
  avatarUrl="https://github.com/transferwise.png"
  done={false}
  profileType={FlowNavigation.ProfileType.BUSINESS}
  theme={FlowNavigation.Theme.LIGHT}
  onGoBack={() => alert('go back')}
  showCloseButton
  steps={[
    {
      label: 'Amount',
      hoverLabel: (
        <>
          <div>
            <strong>100 GBP</strong>
          </div>
          0.2351 ETH
        </>
      ),
    },
    {
      label: 'My details',
      hoverLabel: (
        <>
          <div>
            <strong>Diana Jaramillo</strong>
          </div>
          dianajarm123@gmail.com
        </>
      ),
    },
    { label: 'Recipient', hoverLabel: 'Some person/dog' },
    { label: 'Something', hoverLabel: 'Cool' },
  ]}
/>;
