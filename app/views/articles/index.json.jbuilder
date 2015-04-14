json.array!(@articles) do |article|
  json.extract! article, :id, :title, :category_id, :article
  json.url article_url(article, format: :json)
end
