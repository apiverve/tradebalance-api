from setuptools import setup, find_packages

setup(
    name='apiverve_tradebalance',
    version='1.2.2',
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'requests',
        'setuptools'
    ],
    description='Trade Balance provides monthly US international trade data - exports, imports, and the resulting goods-and-services trade balance (deficit or surplus) on a Balance of Payments basis.',
    author='APIVerve',
    author_email='hello@apiverve.com',
    url='https://apiverve.com/marketplace/tradebalance?utm_source=pypi&utm_medium=referral&utm_content=homepage',
    classifiers=[
        'Programming Language :: Python :: 3',
        'Operating System :: OS Independent',
    ],
    python_requires='>=3.6',
)
