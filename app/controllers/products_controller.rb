class ProductsController < ApplicationController
  def index
    @products = Product.all
    gon.products = Product.all
  end

  def show
    @product = Product.find(params[:id])
    @properties = Product.find(params[:id])
  end

  def new
    @product = Product.new
    @properties = @product.properties.build
    @product_properties = @properties.product_properties.build
  end

  def create
    @product = Product.new(product_params)

    if @product.save
    redirect_to products_path,
    notice: 'The product was successfully created.'
    else
      render 'new'
    end
  end

  private
  def product_params
    params.require(:product).permit(:name, :upc, :available_on,
      :properties_attributes => [:id, :property_name,
        :product_properties_attributes => [:id, :value]
        ])
  end
  def get_property
    @property = Property.find(params[:property_id])
  end
end
