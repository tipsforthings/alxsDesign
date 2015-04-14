module ApplicationHelper

  def full_title(page_title = '')
    base_title = "ALXS Design"
    if page_title.empty?
      base_title
    else
      "#{base_title} | #{page_title}"
    end
  end

  def keys(page_keys = '')
    base_keys = "ALXS Design, Zurb Foundation, Responsive Design, Responsive Navigation"
    if page_keys.empty?
      base_keys
    else
      "#{page_keys}, #{base_keys}"
    end
  end

  def author(page_author = '')
    base_author = "Alex Scott"
    if page_author.empty?
      base_author
    else
      page_author
    end
  end

  def full_desc(page_desc = '')
    site_desc = "Portfolio of ALXS Design featuring 2 new responsive navigation templates using Zurb Foundation framework. The templates are available for demonstration and free download."
    if page_desc.empty?
      site_desc
    else
      "#{page_desc}"
    end
  end

  def og_image(page_og = '')
    site_og = "http://alxs.co.uk/assets/cover2.png"
    if page_og.empty?
      site_og
    else
      "#{page_og}"
    end
  end
end
