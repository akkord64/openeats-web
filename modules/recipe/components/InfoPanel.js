import React from 'react'
import PropTypes from 'prop-types'
import {
    injectIntl,
    defineMessages,
} from 'react-intl'

import { Input } from '../../common/components/FormComponents'

const RecipeHeader = ({ cookTime, prepTime, servings, customServings, info, updateServings, clearServings, intl, Calories, TotalFat, SatFat, Cholesterol, Sodium, TotalCarb, Fibers, Sugars, Proteins }) => {
  const messages = defineMessages({
    servings: {
      id: 'recipe.servings',
      description: 'Servings',
      defaultMessage: 'Servings',
    },
    prep_time: {
      id: 'recipe.prep_time',
      description: 'Preparation time',
      defaultMessage: 'Prep time',
    },
    cooking_time: {
      id: 'recipe.cooking_time',
      description: 'Cooking time',
      defaultMessage: 'Cooking time',
    },
    minutes: {
      id: 'recipe.minutes',
      description: 'minutes',
      defaultMessage: 'minutes'
    },
    Calories: {
      id: 'recipe.Calories',
      description: 'Calories',
      defaultMessage: 'Calories'
    },
    TotalFat: {
      id: 'recipe.TotalFat',
      description: 'Total Fat',
      defaultMessage: 'Total Fat'
    },
    SatFat: {
      id: 'recipe.SatFat',
      description: 'Saturated Fat',
      defaultMessage: 'Saturated Fat'
    },
    Cholesterol: {
      id: 'recipe.Cholesterol',
      description: 'Cholesterol',
      defaultMessage: 'Cholesterol'
    },
    Sodium: {
      id: 'recipe.Sodium',
      description: 'Sodium',
      defaultMessage: 'Sodium'
    },
    TotalCarb: {
      id: 'recipe.TotalCarb',
      description: 'Total Carbohydrates',
      defaultMessage: 'Total Carbohydrates'
    },
    Fibers: {
      id: 'recipe.Fibers',
      description: 'Fibers',
      defaultMessage: 'Fibers'
    },
    Sugars: {
      id: 'recipe.Sugars',
      description: 'Sugars',
      defaultMessage: 'Sugars'
    },
    Proteins: {
      id: 'recipe.Proteins',
      description: 'Proteins',
      defaultMessage: 'Proteins'
    },
  });

  let clearInput = '';
  if (servings !== customServings) {
    clearInput = (
      <span className="input-group-btn">
        <button className="btn btn-default" type="button" onClick={ clearServings.bind(this, servings) }>
          <span className="glyphicon glyphicon-remove" aria-hidden="true"/>
        </button>
      </span>
    )
  }

  return (
        <div className="panel panel-default">
        <table className="table table-bordered">
            <thead>
            <tr className="active">
                <th>{intl.formatMessage(messages.servings)}</th>
                <th>{intl.formatMessage(messages.prep_time)}</th>
                <th>{intl.formatMessage(messages.cooking_time)}</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>
                    <div className="input-group print-hidden">
                        <Input
                            name="servings"
                            type="number"
                            size="servings-textbox"
                            change={updateServings}
                            value={customServings !== 0 ? customServings : ''}/>
                        {clearInput}
                    </div>
                    <p className="print-only">{customServings ? customServings : servings}</p>
                </td>
                <td>{prepTime} {intl.formatMessage(messages.minutes)}</td>
                <td>{cookTime} {intl.formatMessage(messages.minutes)}</td>
            </tr>
            </tbody>
        </table>
                <div className="panel-body">
            <h4>Nutrition Facts</h4>
            <p>Per Serving: {Calories} Calories; {TotalFat}g Fat; {TotalCarb}g
                Carbohydrates; {Cholesterol}mg Cholesterol; {Sodium}mg Sodium. </p>
        </div>

        </div>

        );

        };

        RecipeHeader.PropTypes = {
        cookTime: PropTypes.number.isRequired,
        prepTime: PropTypes.number.isRequired,
        servings: PropTypes.number.isRequired,
        customServings: PropTypes.string,
        info: PropTypes.string.isRequired,
        updateServings: PropTypes.func.isRequired,
        clearServings: PropTypes.func.isRequired,
        intl: PropTypes.object.isRequired,
        Calories: PropTypes.number.isRequired,
        TotalFat: PropTypes.number.isRequired,
        SatFat: PropTypes.number.isRequired,
        Cholesterol: PropTypes.number.isRequired,
        Sodium: PropTypes.number.isRequired,
        TotalCarb: PropTypes.number.isRequired,
        Fibers: PropTypes.number.isRequired,
        Sugars: PropTypes.number.isRequired,
        vProteins: PropTypes.number.isRequired,
    };

        export default injectIntl(RecipeHeader);)
        }

