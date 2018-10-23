import React from 'react'
import {
  injectIntl,
  defineMessages,
} from 'react-intl';

import {
  Input,
  File,
  Select,
  TextArea,
  Checkbox,
} from '../../common/components/FormComponents'

import IngredientBox from './IngredientBox'
import DirectionBox from './DirectionBox'
import SubRecipeBox from './SubRecipeBox'
import TagList from './TagList'
import Status from './Status'

require("./../css/recipe_form.scss");

class RecipeForm extends React.Component {
  getRecipeImage = (photo_thumbnail) => {
    if (photo_thumbnail) {
      return photo_thumbnail;
    } else {
      return '/images/fried-eggs.png';
    }
  };

  save = e => {
    e.preventDefault();
    this.props.recipeFormActions.save(this.props.form);
  };

  submit = e => {
    e.preventDefault();
    this.props.recipeFormActions.submit(this.props.form);
  };

  render() {
    const { formatMessage } = this.props.intl;
    const messages = defineMessages({
      name_label: {
        id: 'recipe.create.name_label',
        description: 'Recipe name label',
        defaultMessage: 'Recipe name',
      },
      name_placeholder: {
        id: 'recipe.create.name_placeholder',
        description: 'Recipe name placeholder',
        defaultMessage: 'Recipe',
      },
      course_label: {
        id: 'recipe.create.course_label',
        description: 'Course label',
        defaultMessage: 'Course',
      },
      cuisine_label: {
        id: 'recipe.create.cuisine_label',
        description: 'Cuisine label',
        defaultMessage: 'Cuisine',
      },
      tags_label: {
        id: 'recipe.create.tags_label',
        description: 'Tags label',
        defaultMessage: 'Tags',
      },
      tags_placeholder: {
        id: 'recipe.create.tags_placeholder',
        description: 'Tags Placeholder',
        defaultMessage: 'Separate each tag by comma',
      },
      prep_time_label: {
        id: 'recipe.create.prep_time_label',
        description: 'Prep time label',
        defaultMessage: 'Prep time',
      },
      prep_time_placeholder: {
        id: 'recipe.create.prep_time_placeholder',
        description: 'Prep time placeholder',
        defaultMessage: 'Prep time in minutes',
      },
      cooking_time_label: {
        id: 'recipe.create.cooking_time_label',
        description: 'Cooking time label',
        defaultMessage: 'Cooking time',
      },
      cooking_time_placeholder: {
        id: 'recipe.create.cooking_time_placeholder',
        description: 'Cooking time placeholder',
        defaultMessage: 'Cooking time in minutes',
      },
      servings_label: {
        id: 'recipe.create.servings_label',
        description: 'Servings label',
        defaultMessage: 'Servings',
      },
      servings_placeholder: {
        id: 'recipe.create.servings_placeholder',
        description: 'Servings placeholder',
        defaultMessage: 'Servings',
      },
      rating_label: {
        id: 'recipe.create.rating_label',
        description: 'Rating label',
        defaultMessage: 'Rating',
      },
      rating_placeholder: {
        id: 'recipe.create.rating_placeholder',
        description: 'Rating placeholder',
        defaultMessage: 'Rate this recipe from 0 to 5',
      },
      subrecipes_label: {
        id: 'recipe.create.subrecipes_label',
        description: 'Recipe links label',
        defaultMessage: 'Recipe links',
      },
      ingredients_label: {
        id: 'recipe.create.ingredients_label',
        description: 'Recipe ingredients label',
        defaultMessage: 'Ingredients',
      },
      directions_label: {
        id: 'recipe.create.directions_label',
        description: 'Rating label',
        defaultMessage: 'Directions',
      },
      information_label: {
        id: 'recipe.create.information_label',
        description: 'Recipe information label',
        defaultMessage: 'Recipe information',
      },
      information_placeholder: {
        id: 'recipe.create.information_placeholder',
        description: 'Recipe information placeholder',
        defaultMessage: 'A quick description of the recipe',
      },
      source_label: {
        id: 'recipe.create.source_label',
        description: 'Rating source label',
        defaultMessage: 'Source',
      },
       Calories_label: {
        id: 'recipe.create.vCalories_label',
        description: 'Calories Label',
        defaultMessage: 'Calories',
      },
       Calories_placeholder: {
        id: 'recipe.create.Calories_placeholder',
        description: 'Calories Placeholder',
        defaultMessage: 'Calories',
      },
       TotalFat_label: {
        id: 'recipe.create.TotalFat_label',
        description: 'TotalFat Label',
        defaultMessage: 'Total Fat',
      },
       TotalFat_placeholder: {
        id: 'recipe.create.TotalFat_placeholder',
        description: 'TotalFat Placeholder',
        defaultMessage: 'Total Fat',
      },
       SatFat_label: {
        id: 'recipe.create.SatFat_label',
        description: 'SatFat Label',
        defaultMessage: 'Saturated Fat',
      },
       SatFat_placeholder: {
        id: 'recipe.create.SatFat_placeholder',
        description: 'SatFat placeholder',
        defaultMessage: 'Saturated Fat',
      },
       Cholesterol_label: {
        id: 'recipe.create.Cholesterol_label',
        description: 'Cholesterol Label',
        defaultMessage: 'Cholesterol',
      },
       Cholesterol_placeholder: {
        id: 'recipe.create.Cholesterol_placeholder',
        description: 'Cholesterol Placeholder',
        defaultMessage: 'Cholesterol',
      },
       Sodium_label: {
        id: 'recipe.create.Sodium_label',
        description: 'Sodium Label',
        defaultMessage: 'Sodium',
      },
       Sodium_placeholder: {
        id: 'recipe.create.Sodium_placeholder',
        description: 'Sodium Placeholder',
        defaultMessage: 'Sodium',
      },
       TotalCarb_label: {
        id: 'recipe.create.TotalCarb_label',
        description: 'TotalCarb Label',
        defaultMessage: 'Total Carbohydrates',
      },
       TotalCarb_placeholder: {
        id: 'recipe.create.TotalCarb_placeholder',
        description: 'TotalCarb Placeholder',
        defaultMessage: 'Total Carbohydrates',
      },
       Fibers_label: {
        id: 'recipe.create.Fibers_label',
        description: 'Fibers Label',
        defaultMessage: 'Fiber',
      },
       Fibers_placeholder: {
        id: 'recipe.create.Fibers_placeholder',
        description: 'Fibers Placeholder',
        defaultMessage: 'Fiber',
      },
       Sugars_label: {
        id: 'recipe.create.Sugars_label',
        description: 'Sugars Label',
        defaultMessage: 'Sugars',
      },
       Sugars_placeholder: {
        id: 'recipe.create.Sugars_placeholder',
        description: 'Sugars Placeholder',
        defaultMessage: 'Sugars',
      },
       Proteins_label: {
        id: 'recipe.create.Protein_label',
        description: 'Protein Label',
        defaultMessage: 'Protein',
      },
       Proteins_placeholder: {
        id: 'recipe.create.Protein_placeholder',
        description: 'Protein Placeholder',
        defaultMessage: 'Protein',
      },
      source_placeholder: {
        id: 'recipe.create.source_placeholder',
        description: 'Rating source placeholder',
        defaultMessage: 'URL source of the recipe (if any)',
      },
      photo_label: {
        id: 'recipe.create.photo_label',
        description: 'Photo label',
        defaultMessage: 'Photo',
      },
      photo_placeholder: {
        id: 'recipe.create.photo_placeholder',
        description: 'Photo placeholder',
        defaultMessage: 'Photo',
      },
      optional: {
        id: 'recipe.create.optional',
        description: 'optional',
        defaultMessage: 'Optional',
      },
      public_label: {
        id: 'recipe.create.public_label',
        description: 'Recipe set public label',
        defaultMessage: 'Public Recipe',
      },
      submit: {
        id: 'recipe.create.submit',
        description: 'Submit recipe button',
        defaultMessage: 'Submit recipe',
      },
      save: {
        id: 'recipe.create.save',
        description: 'Save recipe button',
        defaultMessage: 'Save recipe',
      }
    });

    return (
      <div className="container">
        <div className="row">
          <form className="recipe-form">
            <div className="col-md-12">
              <Status
                  status={ this.props.status }
                  actions={ this.props.statusActions }
              />
            </div>
            <div id="recipe" className="col-lg-4 col-md-5">
              <img
                src={ this.getRecipeImage(this.props.form.photo_thumbnail) }
                alt={ formatMessage(messages.photo_placeholder) }
              />

              <File
                name="photo"
                placeholder={ formatMessage(messages.photo_placeholder) }
                accept="image/*"
                change={ this.props.recipeFormActions.update }
              />

              <div className="row">
                <Select
                  name="course"
                  data={ this.props.courses }
                  label={ formatMessage(messages.course_label) }
                  size="col-sm-6 col-xs-12"
                  change={ this.props.recipeFormActions.update }
                  value={ this.props.form.course || '' }
                  errors={ this.props.form.errors.course }
                />
                <Select
                  name="cuisine"
                  data={ this.props.cuisines }
                  label={ formatMessage(messages.cuisine_label) }
                  size="col-sm-6 col-xs-12"
                  change={ this.props.recipeFormActions.update }
                  value={ this.props.form.cuisine || ''  }
                  errors={ this.props.form.errors.cuisine }
                />
                <TagList
                  name="tags"
                  data={ this.props.tags }
                  label={ formatMessage(messages.tags_label) + " (" + formatMessage(messages.optional) + ")" }
                  size="col-sm-12 col-xs-12"
                  placeholder={ formatMessage(messages.tags_placeholder) }
                  change={ this.props.recipeFormActions.update }
                  tags={ this.props.form.tags || '' }
                  errors={ this.props.form.errors.tags }
                />
              </div>

              <div className="row">
                <Input
                  name="prep_time"
                  type="number"
                  label={ formatMessage(messages.prep_time_label) }
                  placeholder={ formatMessage(messages.prep_time_placeholder) }
                  size="col-sm-6 col-xs-12"
                  change={ this.props.recipeFormActions.update }
                  value={ this.props.form.prep_time || '' }
                  errors={ this.props.form.errors.prep_time }
                />
                <Input
                  name="cook_time"
                  type="number"
                  label={ formatMessage(messages.cooking_time_label) }
                  placeholder={ formatMessage(messages.cooking_time_placeholder) }
                  size="col-sm-6 col-xs-12"
                  change={ this.props.recipeFormActions.update }
                  value={ this.props.form.cook_time || '' }
                  errors={ this.props.form.errors.cook_time }
                />
              </div>
              <div className="row">
                <Input
                  name="servings"
                  type="number"
                  label={ formatMessage(messages.servings_label) }
                  placeholder={ formatMessage(messages.servings_placeholder) }
                  size="col-sm-6 col-xs-12"
                  change={ this.props.recipeFormActions.update }
                  value={ this.props.form.servings || '' }
                  errors={ this.props.form.errors.servings }
                />
                <Input
                  name="rating"
                  type="number"
                  label={ formatMessage(messages.rating_label) + " (" + formatMessage(messages.optional) + ")" }
                  placeholder={ formatMessage(messages.rating_placeholder) }
                  size="col-sm-6 col-xs-12"
                  change={ this.props.recipeFormActions.update }
                  value={ this.props.form.rating || '' }
                  errors={ this.props.form.errors.rating }
                />
              </div>
              <div className="row">
                <Input
                  name="source"
                  type="text"
                  size="col-xs-12"
                  label={ formatMessage(messages.source_label) + " (" + formatMessage(messages.optional) + ")" }
                  placeholder={ formatMessage(messages.source_placeholder) }
                  change={ this.props.recipeFormActions.update }
                  value={ this.props.form.source || '' }
                  errors={ this.props.form.errors.source }
                />
              </div>

<div className="form-group null">

    <h4> Nutritional Data: Per Serving (Optional)</h4>
             <Input
                name="Calories"
                label={ formatMessage(messages.Calories_label)}
                size="col-sm-4 col-xs-12"
                placeholder={formatMessage(messages.Calories_placeholder)}
                value={ this.props.form.Calories || '' }
                change={ this.props.recipeFormActions.update }
                errors={ this.props.form.errors.Calories }
                checked={ this.props.form.errors.Calories }
              />
              <Input
                name="TotalFat"
                label={ formatMessage(messages.TotalFat_label)}
                size="col-sm-4 col-xs-12"
                placeholder={formatMessage(messages.TotalFat_placeholder)}
                value={ this.props.form.TotalFat || '' }
                change={ this.props.recipeFormActions.update }
                errors={ this.props.form.errors.TotalFat }
                checked={ this.props.form.errors.TotalFat }
              />
              <Input
                name="SatFat"
                label={ formatMessage(messages.SatFat_label)}
                size="col-sm-4 col-xs-12"
                placeholder={formatMessage(messages.SatFat_placeholder)}
                value={ this.props.form.SatFat || '' }
                change={ this.props.recipeFormActions.update }
                errors={ this.props.form.errors.SatFat }
                checked={ this.props.form.errors.SatFat }
              />
              <Input
                name="Cholesterol"
                label={ formatMessage(messages.Cholesterol_label)}
                size="col-sm-4 col-xs-12"
                placeholder={formatMessage(messages.Cholesterol_placeholder)}
                value={ this.props.form.Cholesterol || '' }
                change={ this.props.recipeFormActions.update }
                errors={ this.props.form.errors.Cholesterol }
                checked={ this.props.form.errors.Cholesterol }
              />
              <Input
                name="Sodium"
                label={ formatMessage(messages.Sodium_label)}
                size="col-sm-4 col-xs-12"
                placeholder={formatMessage(messages.Sodium_placeholder)}
                value={ this.props.form.Sodium || '' }
                change={ this.props.recipeFormActions.update }
                errors={ this.props.form.errors.Sodium }
                checked={ this.props.form.errors.Sodium }
              />
              <Input
                name="TotalCarb"
                label={ formatMessage(messages.TotalCarb_label)}
                size="col-sm-4 col-xs-12"
                placeholder={formatMessage(messages.TotalCarb_placeholder)}
                value={ this.props.form.TotalCarb || '' }
                change={ this.props.recipeFormActions.update }
                errors={ this.props.form.errors.TotalCarb }
                checked={ this.props.form.errors.TotalCarb }
              />
              <Input
                name="Fibers"
                label={ formatMessage(messages.Fibers_label)}
                size="col-sm-4 col-xs-12"
                placeholder={formatMessage(messages.Fibers_placeholder)}
                value={ this.props.form.Fibers || '' }
                change={ this.props.recipeFormActions.update }
                errors={ this.props.form.errors.Fibers }
                checked={ this.props.form.errors.Fibers }
              />
              <Input
                name="Sugars"
                label={ formatMessage(messages.Sugars_label)}
                size="col-sm-4 col-xs-12"
                placeholder={formatMessage(messages.Sugars_placeholder)}
                value={ this.props.form.Sugars || '' }
                change={ this.props.recipeFormActions.update }
                errors={ this.props.form.errors.Sugars }
                checked={ this.props.form.errors.Sugars }
              />
              <Input
                name="Proteins"
                label={ formatMessage(messages.Proteins_label)}
                size="col-sm-4 col-xs-12"
                placeholder={formatMessage(messages.Proteins_placeholder)}
                value={ this.props.form.Proteins || '' }
                change={ this.props.recipeFormActions.update }
                errors={ this.props.form.errors.Proteins }
                checked={ this.props.form.errors.Proteins }
              />
</div>
            </div>

            <div id="recipe" className="col-lg-8 col-md-7">
              <Input
                name="title"
                type="text"
                label={ formatMessage(messages.name_label) }
                placeholder={ formatMessage(messages.name_placeholder) }
                change={ this.props.recipeFormActions.update }
                value={ this.props.form.title || '' }
                errors={ this.props.form.errors.title }
              />
              <TextArea
                name="info"
                rows="4"
                label={ formatMessage(messages.information_label) + " (" + formatMessage(messages.optional) + ")" }
                placeholder={ formatMessage(messages.information_placeholder) }
                change={ this.props.recipeFormActions.update }
                value={ this.props.form.info || '' }
                errors={ this.props.form.errors.info }
              />
              <IngredientBox
                name="ingredient_groups"
                id={ this.props.form.id }
                label={ formatMessage(messages.ingredients_label) }
                data={ this.props.form.ingredient_groups || '' }
                errors={ this.props.form.errors.ingredient_groups }
                change={ this.props.recipeFormActions.update }
              />
              <DirectionBox
                name="directions"
                label={ formatMessage(messages.directions_label) }
                data={ this.props.form.directions || '' }
                errors={ this.props.form.errors.directions }
                change={ this.props.recipeFormActions.update }
              />
              <SubRecipeBox
                name="subrecipes"
                id={ this.props.form.id }
                label={ formatMessage(messages.subrecipes_label) + " (" + formatMessage(messages.optional) + ")"  }
                data={ this.props.form.subrecipes || [] }
                errors={ this.props.form.errors.subrecipes }
                change={ this.props.recipeFormActions.update }
                fetchRecipeList={ this.props.recipeListActions.fetchRecipeList }
              />
              <Checkbox
                name="public"
                label={ formatMessage(messages.public_label) }
                change={ this.props.recipeFormActions.update }
                errors={ this.props.form.errors.public }
                checked={ this.props.form.public }
              />
              {
                this.props.form.id ?
                  <button
                    className="btn btn-success"
                    onClick={ this.save }>
                      { formatMessage(messages.save) }
                  </button> : ''
              }
              <button
                className="btn btn-primary"
                onClick={ this.submit }>
                  { formatMessage(messages.submit) }
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default injectIntl(RecipeForm);
