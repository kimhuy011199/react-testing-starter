import { render, screen } from '@testing-library/react';
import ProductImageGallery from '../../src/components/ProductImageGallery';

describe('ProductImageGallery', () => {
  it('should render a message when no images are available', () => {
    const { container } = render(<ProductImageGallery imageUrls={[]} />);
    expect(container).toBeEmptyDOMElement();
  });

  it('should render a list of images', () => {
    const imageUrls = [
      'https://example.com/image1.jpg',
      'https://example.com/image2.jpg',
    ];
    render(<ProductImageGallery imageUrls={imageUrls} />);
    const list = screen.getAllByRole('img');
    expect(list).toHaveLength(2);

    imageUrls.forEach((url, index) => {
      expect(list[index]).toHaveAttribute('src', url);
    });
  });
});
