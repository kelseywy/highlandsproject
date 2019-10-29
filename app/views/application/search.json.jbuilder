json.extract! @products, :name, :upc, :available_on, :created_at, :updated_at
json.url product_url(product, format: :json)
