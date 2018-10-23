import React from 'react'
import { Modal } from 'react-bootstrap'
import { injectIntl, defineMessages } from 'react-intl';

import BaseModal from '../../../menu/components/modals/BaseModal';


require('../../css/nutritional-modal.scss');


class NutritionalModal extends BaseModal {
  constructor(props) {
    super(props);

    this.state = {

      recipe: this.props.recipe || '',
      title: this.props.title || '',
      valueCalories: this.props.valueCalories || '',
      valueTotalCarb: this.props.valueTotalCarb || '',
      valueTotalFat: this.props.valueTotalFat || '',
      valueSatFat: this.props.valueSatFat || '',
      valueCholesterol: this.props.valueCholesterol || '',
      valueSodium: this.props.valueSodium || '',
      valueFibers: this.props.valueFibers || '',
      valueSugars: this.props.valueSugars || '',
      valueProteins: this.props.valueProteins || '',
    };
  }

  componentWillReceiveProps(nextProps) {
    let { event, startDate, endDate } = nextProps;
    let title = this.props.title;
    let recipe = this.props.recipe;
    let valueCalories = this.props.valueCalories
    let valueTotalCarb = this.props.valueTotalCarb
    let valueTotalFat = this.props.valueTotalFat
    let valueSatFat = this.props.valueSatFat
    let valueCholesterol = this.props.valueCholesterol
    let valueSodium = this.props.valueSodium
    let valueFibers = this.props.valueFibers
    let valueSugars = this.props.valueSugars
    let valueProteins = this.props.valueProteins

    this.setState({
      recipe: recipe,
      title: title,
      valueCalories: valueCalories,
      valueTotalCarb: valueTotalCarb,
      valueTotalFat: valueTotalFat,
      valueSatFat: valueSatFat,
      valueCholesterol: valueCholesterol,
      valueSodium: valueSodium,
      valueFibers: valueFibers,
      valueSugars: valueSugars,
      valueProteins: valueProteins,
    });
  }

   render () {
    let { id, show, onHide, fetchRecipeList, intl} = this.props;
    let { recipe, title, valueCalories, valueTotalFat, valueTotalCarb, valueSatFat, valueCholesterol, valueProteins, valueSugars, valueFibers, valueSodium } = this.state;
    const messages = defineMessages({
      recipe: {
        id: 'men_item_event_model.recipe',
        description: 'Recipe',
        defaultMessage: 'Recipe',
      },
      menu: {
        id: 'men_item_event_model.menu',
        description: 'Menu',
        defaultMessage: 'Menu',
      },
      valueCalories: {
        id: 'recipe.valueCalories',
        description: 'Calories',
        defaultMessage: 'Calories'
      },
      valueTotalFat: {
        id: 'recipe.valueTotalFat',
        description: 'Total Fat',
        defaultMessage: 'Total Fat'
      },
        valueSatFat: {
        id: 'recipe.valueSatFat',
        description: 'Saturated Fat',
        defaultMessage: 'Saturated Fat'
      },
      valueCholesterol: {
        id: 'recipe.valueCholesterol',
        description: 'Cholesterol',
        defaultMessage: 'Cholesterol'
      },
      valueSodium: {
        id: 'recipe.valueSodium',
        description: 'Sodium',
        defaultMessage: 'Sodium'
      },
      valueTotalCarb: {
        id: 'recipe.valueTotalCarb',
        description: 'Total Carbohydrates',
        defaultMessage: 'Total Carbohydrates'
      },
      valueFibers: {
        id: 'recipe.valueFibers',
        description: 'Fibers',
        defaultMessage: 'Fibers'
      },
      valueSugars: {
        id: 'recipe.valueSugars',
        description: 'Sugars',
        defaultMessage: 'Sugars'
      },
      valueProteins: {
        id: 'recipe.valueProteins',
        description: 'Proteins',
        defaultMessage: 'Proteins'
      },

    });

   return (
      <Modal show={ show } onHide={ onHide } className="nutritional-modal">
        <Modal.Header>
          <Modal.Title>Nutritional Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
          <p>Nutritional Data</p>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <button className="btn btn-primary" onClick={ onHide }>Close</button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default injectIntl(NutritionalModal)