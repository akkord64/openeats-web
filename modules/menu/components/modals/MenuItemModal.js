import React from 'react'
import moment from 'moment'
import { Modal } from 'react-bootstrap'
import { injectIntl, defineMessages } from 'react-intl';

import BaseModal from './BaseModal'
import { Checkbox } from '../../../common/components/FormComponents'
import { DateTime } from '../../../common/components/DateTime'
import { Async } from '../../../common/components/Select'

require('../../css/rbc-calendar-modal.scss');

class MenuItemModal extends BaseModal {
  constructor(props) {
    super(props);

    this.state = {
      recipe: this.props.recipe || '',
      title: this.props.title || '',
      start_date: '',
      end_date: '',
      all_day: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    let { event, startDate, endDate } = nextProps;

    let title = this.props.title;
    let placeholder = this.props.intl.messages['men_item_event_model.new_menu_item'];
    let recipe = this.props.recipe;
    let start_date = startDate || new Date();
    let end_date = endDate || new Date();
    let all_day = false;
    let complete = false;

    if (event) {
      recipe = event.recipe_data.id;
      title = event.recipe_data.title;
      placeholder = event.recipe_data.title;
      start_date = event.start_date;
      complete = event.complete;
      end_date = event.end_date;
      all_day = event.all_day;
    }

    this.setState({
      recipe: recipe,
      placeholder: placeholder,
      title: title,
      start_date: start_date,
      end_date: end_date,
      all_day: all_day,
      complete: complete,
    });
  }

  onStateDateChange = (name, value) => {
    this.validate(name, value);
    value = moment(value);
    let newState = {};
    newState[name] = value;

    if (value >= moment(this.state.end_date)) {
      newState['end_date'] = moment(value).add(1, 'h');
    }
    this.setState(newState)
  };

  render () {
    let { id, show, onHide, fetchRecipeList, intl } = this.props;
    let { recipe, title, placeholder, start_date, end_date, all_day, complete } = this.state;
    const messages = defineMessages({
      start_date: {
        id: 'men_item_event_model.start_date',
        description: 'Start Date',
        defaultMessage: 'Start Date',
      },
      end_date: {
        id: 'men_item_event_model.end_date',
        description: 'End Date',
        defaultMessage: 'End Date',
      },
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
      all_day: {
        id: 'men_item_event_model.all_day',
        description: 'Anytime today',
        defaultMessage: 'Anytime today',
      },
      complete: {
        id: 'men_item_event_model.complete',
        description: 'Complete',
        defaultMessage: 'Complete',
      },
      new_menu_item: {
        id: 'men_item_event_model.new_menu_item',
        description: 'Create a new Menu Item',
        defaultMessage: 'Create a new Menu Item',
      },
      confirmDelete: {
        id: 'men_item_event_model.confirm_delete',
        description: 'Are you sure you want to delete this?',
        defaultMessage: 'Are you sure you want to delete this?',
      },
    });

    return (
      <Modal show={ show } onHide={ onHide } className="rbc-calendar-modal">
        <Modal.Header>
          <Modal.Title>{ placeholder }</Modal.Title>
          {id !== 0 ?
            <div
              className="btn btn-danger pull-right"
              onClick={
                this.remove.bind(this, intl.formatMessage(messages.confirmDelete))
              }
            >
              <span className="glyphicon glyphicon-trash"/>
            </div> : ''
          }
        </Modal.Header>

        <Modal.Body>
          <div className="row">
            <Async
              class="col-xs-12"
              name="recipe"
              title="title"
              label={ intl.formatMessage(messages.recipe) }
              value={ recipe ? { value: recipe, label: title } : null }
              change={ this.change }
              loadOptions={ fetchRecipeList }
              errors={ this.state['error_recipe'] }
            />
            <DateTime
              class="col-xs-6"
              label={ intl.formatMessage(messages.start_date) }
              name="start_date"
              value={ start_date }
              change={ this.onStateDateChange }
              timeFormat={ !all_day }
              errors={ this.state['error_start_date'] }
            />
            <DateTime
              class="col-xs-6"
              label={ intl.formatMessage(messages.end_date) }
              name="end_date"
              value={ end_date }
              change={ this.change }
              timeFormat={ !all_day }
              errors={ this.state['error_end_date'] }
            />
            <Checkbox
              size="col-xs-6"
              label={ intl.formatMessage(messages.all_day) }
              name="all_day"
              checked={ all_day }
              change={ this.change }
            />
            <Checkbox
              size="col-xs-6"
              label={ intl.formatMessage(messages.complete) }
              name="complete"
              checked={ complete }
              change={ this.change }
            />
          </div>
        </Modal.Body>

        <Modal.Footer>
          <button className="btn btn-success" onClick={ this.save }>Save</button>
          <button className="btn btn-primary" onClick={ onHide }>Cancel</button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default injectIntl(MenuItemModal)
