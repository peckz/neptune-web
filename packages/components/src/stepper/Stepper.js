import React from 'react';
import Types from 'prop-types';
import './Stepper.css';

function clamp(from, to, value) {
  return Math.max(Math.min(to, value), from);
}

/* eslint-disable react/no-array-index-key */
const Stepper = ({ steps, activeStep }) => {
  const activeStepIndex = clamp(0, steps.length - 1, activeStep);
  const stepPercentage = 1 / (steps.length - 1);
  const percentageCompleted = activeStepIndex / (steps.length - 1);
  const filledWidth = Math.max(percentageCompleted - stepPercentage, 0);
  const endingWidth = Math.min(activeStepIndex, 1) * stepPercentage;

  const renderStep = (step, index) => {
    const clickable = step.onClick && index < activeStepIndex;
    const hoverLabel = step.hoverHTML ? (
      <div
        className="tw-stepper__step-hover-label p-a-2"
        dangerouslySetInnerHTML={{ __html: step.hoverLabel }}
      />
    ) : (
      <div className="tw-stepper__step-hover-label p-a-2">{step.hoverLabel}</div>
    );
    return (
      <li // eslint-disable-line jsx-a11y/no-static-element-interactions
        key={index}
        style={{ left: `${index * stepPercentage * 100}%` }}
        className={`
            tw-stepper__step
            ${index === activeStepIndex ? 'tw-stepper__step--active' : ''}
            ${clickable ? 'tw-stepper__step--done' : ''}
          `}
      >
        {step.hoverLabel ? hoverLabel : ''}
        <button
          className="btn-unstyled tw-stepper__step-label"
          disabled={!clickable}
          onClick={() => clickable && step.onClick()}
        >
          {step.label}
        </button>
      </li>
    );
  };
  return (
    <div className="p-b-4">
      <div className="progress">
        <div className="progress-bar-filler" style={{ width: `${filledWidth * 100}%` }} />
        <div className="progress-bar-ending" style={{ width: `${endingWidth * 100}%` }} />
      </div>
      <ul className="tw-stepper-steps p-t-1">{steps.map(renderStep)}</ul>
    </div>
  );
};
/* eslint-enable react/no-array-index-key */

Stepper.propTypes = {
  steps: Types.arrayOf(
    Types.shape({
      label: Types.string.isRequired,
      onClick: Types.func,
      hoverLabel: Types.string,
      hoverHTML: Types.bool,
    }),
  ).isRequired,
  activeStep: Types.number,
};

Stepper.defaultProps = {
  activeStep: 0,
};

export default Stepper;