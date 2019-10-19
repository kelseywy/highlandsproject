json.products do
  json.array!(@products, :name, :upc) do |product|
    json.name product.name
    json.upc product.upc
    json.available_on product.available_on
  end
end
