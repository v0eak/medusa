/**
 * @schema AdminCreatePromotionRule
 * type: object
 * description: The rule's rules.
 * x-schemaName: AdminCreatePromotionRule
 * required:
 *   - operator
 *   - attribute
 *   - values
 * properties:
 *   operator:
 *     type: string
 *     description: The rule's operator.
 *     enum:
 *       - gt
 *       - lt
 *       - eq
 *       - ne
 *       - in
 *       - lte
 *       - gte
 *   description:
 *     type: string
 *     title: description
 *     description: The rule's description.
 *   attribute:
 *     type: string
 *     title: attribute
 *     description: The rule's attribute.
 *   values:
 *     oneOf:
 *       - type: string
 *         title: values
 *         description: The rule's values.
 *       - type: array
 *         description: The rule's values.
 *         items:
 *           type: string
 *           title: values
 *           description: The value's values.
 * 
*/

